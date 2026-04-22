"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <CldUploadWidget
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          // @ts-ignore: Cloudinary types error
          setImageUrl(result.info?.secure_url);
        }
      }}
      options={{ maxFiles: 1 }}
      uploadPreset={uploadPreset}
    >
      {({ open }) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Add Product Image</label>
            <div
              onClick={() => open()}
              className="relative cursor-pointer hover:opacity-70 transition p-10 
            border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Add Image</p>
              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="new album image"
                  />
                </div>
              )}
            </div>
          </div>
          <input type="hidden" name="image" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  );
}
