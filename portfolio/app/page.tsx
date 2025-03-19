"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // ページが読み込まれたら /home に遷移
    router.push("/home");
  }, [router]);

  return (
    <div>
      {/* 必要に応じてコンテンツを追加 */}
    </div>
  );
}

export default Page;