// "use client"

// import { usePathname, useSearchParams } from "next/navigation"
// import { useEffect } from "react"
// import Script from "next/script"

// // This is a placeholder component for analytics
// // Replace with your actual analytics implementation
// export function Analytics() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     // Only track in production or when analytics is explicitly enabled
//     if (typeof window !== "undefined" && window.gtag && process.env.NODE_ENV === "production") {
//       const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
//       window.gtag("config", "G-XXXXXXXXXX", {
//         page_path: url,
//       })
//     }
//   }, [pathname, searchParams])

//   // Only load analytics in production
//   if (process.env.NODE_ENV !== "production") {
//     return null
//   }

//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
//         onError={(e) => {
//           console.warn("Failed to load Google Analytics:", e)
//         }}
//       />
//       <Script
//         id="gtag-init"
//         strategy="afterInteractive"
//         onError={(e) => {
//           console.warn("Failed to initialize Google Analytics:", e)
//         }}
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-XXXXXXXXXX', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//     </>
//   )
// }
