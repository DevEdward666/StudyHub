export const convertBinaryToDataUrl = (
  binaryData: ArrayBuffer | Uint8Array,
  contentType: string = "image/png"
): string => {
  let binary = "";
  const bytes = new Uint8Array(binaryData);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  const base64 = btoa(binary);
  return `data:${contentType};base64,${base64}`;
};
export const convertBase64ToDataUrl = (
  base64Data: string,
  contentType: string = "image/png"
): string => {
  // remove any existing prefix
  const cleanBase64 = base64Data.replace(/^data:[^;]+;base64,/, "");
  return `data:${contentType};base64,${cleanBase64}`;
};
export const toDataUrl = (
  input?: string | ArrayBuffer | Uint8Array,
  contentType: string = "image/png"
): string | null => {
  if (!input) return null;

  if (typeof input === "string") {
    // assume it's already base64
    const cleanBase64 = input.replace(/^data:[^;]+;base64,/, "");
    return `data:${contentType};base64,${cleanBase64}`;
  }

  const bytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  return `data:${contentType};base64,${base64}`;
};
