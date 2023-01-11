import React from "react";
import successStyle from "src/components/Form/Success.module.css";

export const Success = () => {
  return (
    <div className={successStyle.container}>
      <p>お問わせを送信しました！</p>
      <p>返信まで今しばらくお待ち下さい。</p>
    </div>
  );
};
