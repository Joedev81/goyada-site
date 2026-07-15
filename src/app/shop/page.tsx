import { Suspense } from "react";
import ShopContent from "./ShopContent";

export default function ShopPage() {
    return (
        <Suspense
           fallback={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Loading shop...
            </div>
           }
        >
            <ShopContent />
        </Suspense>
    );
}