export function convertLocalPathToURL(localPath) {
    // Base URL for your server
    const baseURL = "http://localhost:3000/uploads/";
  
    let normalizedPath = localPath.replace(/\\/g, "/"); // Replace all `\` with `/`
  
    // Ensure the path includes a `/` between `uploads` and the filename
    normalizedPath = normalizedPath.replace(/\/uploads(?!\/)/, "/uploads/");
  
    // Extract the filename
    const fileName = normalizedPath.split("/").pop();
  
    // Construct the final URL
    const finalURL = baseURL + fileName;
    console.log("Normalized Path:", normalizedPath);
    console.log("Extracted File Name:", fileName);
    console.log("Final URL:", finalURL);
    return finalURL;
  }
  