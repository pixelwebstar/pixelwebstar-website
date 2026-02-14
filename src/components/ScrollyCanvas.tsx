"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ScrollyCanvasProps {
  numFrames?: number;
  basePath?: string; // e.g., "/sequence/ezgif-frame-"
  className?: string;
  imageExtension?: string;
  targetRef?: React.RefObject<HTMLElement | null>; // Ref to the scroll container
}

export default function ScrollyCanvas({
  numFrames = 90,
  basePath = "/sequence/ezgif-frame-",
  imageExtension = "jpg",
  className,
  targetRef
}: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Use targetRef if provided, otherwise default to global scroll (which might be less precise)
  const { scrollYProgress } = useScroll({
    target: targetRef || undefined,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const imagePromises: Promise<void>[] = [];

      // Load first frame immediately
      const firstImg = new Image();
      const firstPaddedIndex = "001"; // Assuming 1-based index
      firstImg.src = `${basePath}${firstPaddedIndex}.${imageExtension}`;

      try {
        await new Promise<void>((resolve, reject) => {
          firstImg.onload = () => resolve();
          firstImg.onerror = () => resolve(); // Fail gracefully
        });
        if (isMounted) {
          loadedImages[0] = firstImg;
          setImages([firstImg]); // Set partially to show something
          setFirstFrameLoaded(true);
        }
      } catch {
        console.error("Failed to load first frame");
      }

      // Load the rest in background
      for (let i = 2; i <= numFrames; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          const paddedIndex = i.toString().padStart(3, "0");
          img.src = `${basePath}${paddedIndex}.${imageExtension}`;
          img.onload = () => {
            loadedImages[i - 1] = img;
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image ${i}`);
            // Create a placeholder or reuse previous to avoid crash
            loadedImages[i - 1] = loadedImages[i - 2] || img;
            resolve();
          };
        });
        imagePromises.push(promise);
      }

      await Promise.all(imagePromises);
      if (isMounted) {
        setImages(loadedImages);
        setIsLoaded(true);
      }
    };

    loadImages();
    return () => { isMounted = false; };
  }, [numFrames, basePath, imageExtension]);

  // Handle Canvas Rendering
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    // Fallback to first image if current not yet loaded (during progressive load)
    const img = images[index] || images[0];

    if (!canvas || !ctx || !img) return;

    // Responsive Object-Fit Cover Logic
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }

    // Calculate scaling to cover the canvas
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    // Mobile Offset Enhancement: Shift image right for better composition on small screens
    if (canvas.width < 768) {
      x += canvas.width * 0.05; // Subtle 5% shift
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [images]);

  // Bind Scroll to Frames
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!firstFrameLoaded && !isLoaded) return;
    const index = Math.round(latest);
    const safeIndex = Math.min(Math.max(index, 0), numFrames - 1);
    requestAnimationFrame(() => renderFrame(safeIndex));
  });

  // Initial render when first frame is loaded
  useEffect(() => {
    if (firstFrameLoaded) {
      renderFrame(0);
    }
  }, [firstFrameLoaded, renderFrame]);

  return (
    <div className={cn("sticky top-0 h-screen w-full overflow-hidden bg-[#121212]", className)}>
      <canvas
        ref={canvasRef}
        className={cn(
          "h-full w-full transition-opacity duration-1000",
          firstFrameLoaded ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Loading Indicator - Only show if absolutely nothing is loaded */}
      {!firstFrameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#121212]">
          <div className="animate-pulse">Loading Experience...</div>
        </div>
      )}
    </div>
  );
}
