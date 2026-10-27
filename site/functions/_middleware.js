export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "www.oddloaf.dev") {
    url.hostname = "oddloaf.dev";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  // Spooly → OwnFlick rename (preserve subpath + query; remap spooly-* filenames)
  if (url.pathname === "/spooly" || url.pathname === "/spooly/" || url.pathname.startsWith("/spooly/")) {
    let rest = url.pathname === "/spooly" || url.pathname === "/spooly/"
      ? "/"
      : url.pathname.slice("/spooly".length); // keeps leading /
    // /spooly/spooly-hero.webp → /ownflick/ownflick-hero.webp
    if (rest.startsWith("/spooly-")) {
      rest = "/ownflick-" + rest.slice("/spooly-".length);
    }
    url.hostname = "oddloaf.dev";
    url.protocol = "https:";
    url.pathname = "/ownflick" + (rest === "/" ? "/" : rest);
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
