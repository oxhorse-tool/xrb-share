"use strict";

globalThis.buildPetInstallLink = function (imageUrl, spriteVersion) {
  const url = new URL(String(imageUrl).trim());
  if (url.protocol !== "https:") throw new Error("请填写公开 HTTPS 图片直链。");
  if (url.username || url.password) throw new Error("请使用无需账号凭据的公开图片直链。");
  const version = String(spriteVersion);
  if (version !== "1" && version !== "2") throw new Error("精灵图版本应为 1 或 2。");
  const values = {
    name: "傲慢的小肉包",
    imageUrl: url.href,
    description: "橙色嫩芽帽衫、奶黄色长垂耳的软萌小伙伴，陪你专注工作。",
    spriteVersionNumber: version
  };
  const query = Object.entries(values).map(([key, value]) => key + "=" + encodeURIComponent(value)).join("&");
  return "codex://pets/install?" + query;
};
