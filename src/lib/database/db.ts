export interface THeroContent {
  page: string;
  title: string;
  description: string;
}

export interface TSEOData {
  page: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export interface TGuide {
  title: string;
  desc: string;
}

export interface TTestimonials {
  name: string;
  cont: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Policy {
  page: string;
  title: string;
  metaDescription: string;
  metaTitle: string;
  description: string;
  keywords: string;
}

export interface Script {
  headerCode: string;
  bodyCode: string;
  footerCode: string;
  adScript: {
    bannerAd_300_250: string;
    longBannerAd_468_60: string;
  };
}

export interface Contact {
  phone: string;
  email: string;
}

export const heroContent: THeroContent[] = [
  {
    page: "/instagram-reels-download",
    title: "Instagram Reels Downloader - Download Instagram Reels Videos",
    description:
      "Download Instagram Reels videos easily and quickly with our online tool. Save high-quality Reels from Instagram in just a few clicks.",
  },
  {
    page: "/instagram-posts-download",
    title: "Instagram Posts Downloader - Save Instagram Photos & Videos",
    description:
      "Download Instagram posts, including photos and videos, with our simple tool. Save your favorite Instagram content directly to your device.",
  },
  {
    page: "/instagram-stories-download",
    title: "Instagram Stories Downloader - Save Instagram Stories Easily",
    description:
      "Download Instagram Stories quickly and effortlessly with our online Instagram Stories downloader. Save stories before they disappear.",
  },
  {
    page: "/instagram-igtv-download",
    title: "Instagram IGTV Downloader - Download IGTV Videos",
    description:
      "Download Instagram IGTV videos in high quality with our IGTV downloader. Save long-form Instagram videos with ease.",
  },
  {
    page: "/facebook-videos-download",
    title: "Facebook Videos Downloader - Download Facebook Videos",
    description:
      "Download Facebook videos directly to your device with our easy-to-use Facebook Videos downloader. Supports all video formats.",
  },
  {
    page: "/facebook-stories-download",
    title: "Facebook Stories Downloader - Save Facebook Stories",
    description:
      "Quickly download Facebook Stories before they disappear. Save your favorite moments with our Facebook Stories downloader.",
  },
  {
    page: "/tiktok-videos-download",
    title: "TikTok Videos Downloader - Save TikTok Videos Easily",
    description:
      "Download TikTok videos without watermarks in high quality. Save your favorite TikTok videos with our online tool.",
  },
  {
    page: "/tiktok-stories-download",
    title: "TikTok Stories Downloader - Download TikTok Stories",
    description:
      "Download TikTok Stories easily with our free downloader. Save TikTok Stories before they disappear.",
  },
  {
    page: "/youtube-videos-download",
    title: "YouTube Videos Downloader - Download YouTube Videos",
    description:
      "Download YouTube videos in high quality with our free YouTube Videos downloader. Save videos in multiple formats.",
  },
  {
    page: "/youtube-playlists-download",
    title: "YouTube Playlists Downloader - Save YouTube Playlists",
    description:
      "Download entire YouTube playlists in one go with our YouTube Playlists downloader. Save your favorite playlists offline.",
  },
  {
    page: "/social-media-downloader",
    title: "Social Media Downloader - Download Videos from Any Social Platform",
    description:
      "Paste any social media link to download videos from platforms like Instagram, Facebook, TikTok, YouTube, and more. Our all-in-one downloader supports multiple formats and resolutions.",
  },
  {
    page: "/youtube-shorts-download",
    title: "YouTube Shorts Downloader - Download YouTube Shorts Videos",
    description:
      "Easily download YouTube Shorts videos in high quality with our YouTube Shorts downloader. Save your favorite Shorts directly to your device.",
  },
];

export const guides: TGuide[] = [
  {
    title: "Copy the URL",
    desc: "Open the Instagram application or website, copy the URL of the photo, video, reels, carousel, IGTV.",
  },
  {
    title: "Paste the link",
    desc: "Return to the Downloady website, paste the link into the input field and click the “Get Link” button.",
  },
  {
    title: "Download",
    desc: "Quickly you will get the results with several quality options. Download what fits your needs.",
  },
];

export const htmlContent = `<div class="max-w-7xl mx-auto p-6">
<!-- Section: List of Providing Platforms -->
<section class="mb-12">
  <h2 class="text-2xl font-semibold mb-4">
    List of Providing Platforms
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    We've engineered our exclusive social media video downloader to be as versatile as possible, covering a broad range of popular platforms, including:
  </p>
  <ul class="list-disc pl-5 space-y-2 text-lg">
    <li>Facebook</li>
    <li>Instagram</li>
    <li>Twitter</li>
    <li>TikTok</li>
    <li>YouTube</li>
  </ul>
  <p class="text-lg leading-relaxed mt-4">
    From everyday users to established brands and high-level influencers, we're here to streamline and simplify your social media experience with quick and easy video downloads!
  </p>
</section>

<!-- Section: How to Download Videos -->
<section class="mb-12">
  <h2 class="text-2xl font-semibold mb-4">
    How to Download Videos With Our Social Media Video Downloader?
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    Our innovative tool gives you the opportunity to download any social media video in just a few clicks. Simply follow the four easy steps outlined below to get a hard copy of your chosen video saved on your device:
  </p>
  <ol class="list-decimal pl-5 space-y-3 text-lg">
    <li>
      <span class="font-semibold">Select the platform</span> from which you would like to download a video from options including Instagram, Facebook, Twitter, TikTok, and YouTube.
    </li>
    <li>
      Copy and paste the <span class="font-semibold">video URL</span> you would like to download into the box on the screen, ensuring it is accurate.
    </li>
    <li>
      Once your video has been located and processed, the platform will show a <span class="font-semibold">Download Video</span> button. You can click on it to start your download.
    </li>
    <li>
      Downloading videos with our exclusive tool also allows you to choose between a variety of video quality options, so you can select the exact resolution and file size that suits your requirements.
    </li>
  </ol>
</section>

<!-- Section: Features of Our Social Media Video Downloader -->
<section>
  <h2 class="text-2xl font-semibold mb-4">
    Features of Our Social Media Video Downloader
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    We've carefully optimized our app to bring you all the benefits of a cutting-edge social media video downloader with zero complications. Use our tool to download videos to your device and enjoy the following features and benefits:
  </p>
  <ul class="list-none space-y-6 text-lg">
    <li>
      <span class="font-semibold">1. User-Friendly Interface</span>
      <p class="mt-1 leading-relaxed">
        From start to finish, you'll find our user-friendly tool simple and straightforward. No experience or expertise is necessary; just enter a couple of basic details to download your favorite social media videos in seconds. We're here to do the hard work, so you don't have to!
      </p>
    </li>
    <li>
      <span class="font-semibold">2. Flexible Resolution Options</span>
      <p class="mt-1 leading-relaxed">
        Enjoy the freedom to choose from a broad range of resolution options and file sizes, enabling you to choose the exact video quality to suit your needs. Whether looking for full HD or something that won't take up a lot of space on your device, we've got you covered.
      </p>
    </li>
    <li>
      <span class="font-semibold">3. Requires No Installation</span>
      <p class="mt-1 leading-relaxed">
        As our social media video downloader is browser-based, you'll not need to download software or install extensions. There's also no need to open an account; simply access our website anytime from any device to get started.
      </p>
    </li>
    <li>
      <span class="font-semibold">4. Watermark-Free</span>
      <p class="mt-1 leading-relaxed">
        Unlike some, we don't process and download videos with annoying watermarks. Every video you download will appear exactly as it does online, ensuring you get a fresh, picture-perfect copy in your preferred resolution.
      </p>
    </li>
  </ul>
</section>
</div>
`;

export const testimonials: TTestimonials[] = [
  {
    name: "Md Faizan",
    cont: "This platform is the best.",
  },
  {
    name: "John Doe",
    cont: "An amazing experience using this service!",
  },
  {
    name: "Jane Smith",
    cont: "Highly recommend this to everyone.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What is a social media downloader?",
    answer:
      "A social media downloader is a tool or service that allows users to download media content (such as videos or images) from social media platforms.",
  },
  {
    question: "Which social media platforms can I download content from?",
    answer:
      "Our service supports downloading content from various platforms such as Instagram, TikTok, and YouTube. Please check our platform-specific guidelines for more details.",
  },
  {
    question: "Is it legal to download content from social media?",
    answer:
      "Downloading content from social media platforms can be subject to the platform's terms of service and copyright laws. Ensure that you have the right to download and use the content before proceeding.",
  },
  {
    question: "Do I need an account to use the downloader?",
    answer:
      "No, you do not need an account to use our downloader. However, some platforms may require authentication for accessing private or protected content.",
  },
  {
    question: "How do I use the downloader?",
    answer:
      "Simply paste the URL of the media content you want to download into the input field on our website and click the 'Download' button. The media will be processed and available for download shortly.",
  },
  {
    question: "Can I download multiple files at once?",
    answer:
      "Currently, our downloader supports single file downloads. For bulk downloads, you may need to download each file individually.",
  },
  {
    question: "Why is the download taking so long?",
    answer:
      "The download time can vary based on the size of the file, server load, and your internet connection. Larger files may take longer to process and download.",
  },
  {
    question: "What should I do if I encounter an error while downloading?",
    answer:
      "If you encounter an error, please ensure that the URL is correct and the content is accessible. If the problem persists, contact our support team for assistance.",
  },
  {
    question: "Is there a limit to how many times I can use the downloader?",
    answer:
      "There are no strict limits on the number of downloads you can perform. However, excessive usage may be monitored to prevent abuse.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team through the 'Contact Us' page on our website or by sending an email to support@example.com.",
  },
  {
    question:
      "Are there any restrictions on the type of content I can download?",
    answer:
      "You should adhere to the terms of service of the respective social media platforms. Content that violates copyright or is protected by privacy settings may not be accessible or legal to download.",
  },
  {
    question: "Do you store the downloaded files?",
    answer:
      "No, we do not store downloaded files on our servers. All downloads are processed directly and are available for immediate download only.",
  },
];

export const policies: Policy[] = [
  {
    page: "/terms-of-service",
    title: "Terms of Service - Video Downloader Service",
    metaDescription:
      "Read our terms of service to understand the rules and conditions for using our video downloader service.",
    metaTitle: "Terms of Service | Video Downloader",
    description: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus id illo expedita iure non aut facilis. Minima, eos! Aliquam assumenda optio necessitatibus fugit consequuntur soluta similique laudantium voluptatum corrupti. Nobis similique officiis, temporibus, doloremque nesciunt officia optio totam libero veritatis id laudantium amet magni placeat obcaecati commodi! Ipsa quis amet deleniti pariatur, sunt perferendis autem deserunt odio cumque voluptates odit numquam delectus libero cum rerum voluptate incidunt tempore ipsum aliquid minus reiciendis. Incidunt, magnam, asperiores dolorum eligendi recusandae eius dignissimos nobis illum eaque minima quas facere deserunt excepturi qui mollitia nostrum debitis sed quidem quibusdam ullam dicta officia dolorem.</p>`,
    keywords:
      "Video downloader terms of service, video downloader rules, terms of use, video downloader conditions",
  },
  {
    page: "/privacy-policy",
    title: "Privacy Policy - Data Protection and Privacy",
    description: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus id illo expedita iure non aut facilis. Minima, eos! Aliquam assumenda optio necessitatibus fugit consequuntur soluta similique laudantium voluptatum corrupti. Nobis similique officiis, temporibus, doloremque nesciunt officia optio totam libero veritatis id laudantium amet magni placeat obcaecati commodi! Ipsa quis amet deleniti pariatur, sunt perferendis autem deserunt odio cumque voluptates odit numquam delectus libero cum rerum voluptate incidunt tempore ipsum aliquid minus reiciendis. Incidunt, magnam, asperiores dolorum eligendi recusandae eius dignissimos nobis illum eaque minima quas facere deserunt excepturi qui mollitia nostrum debitis sed quidem quibusdam ullam dicta officia dolorem.</p>`,
    metaTitle: "Privacy Policy | Data Protection",
    metaDescription:
      "Read our Privacy Policy to understand how we protect your data and ensure privacy while using our service.",
    keywords:
      "Privacy policy, data protection, video downloader privacy, user privacy, data privacy",
  },
];

export const seoData: TSEOData[] = [
  {
    page: "/instagram-reels-download",
    metaTitle:
      "Download Instagram Reels Videos | Free Instagram Reels Downloader",
    metaDescription:
      "Easily download Instagram Reels videos in high quality with our free online downloader. No signup required!",
    keywords:
      "Instagram Reels downloader, download Instagram Reels, save Instagram Reels, free Instagram video download",
  },
  {
    page: "/instagram-posts-download",
    metaTitle: "Download Instagram Posts | Free Instagram Posts Downloader",
    metaDescription:
      "Save Instagram photos and videos with our easy-to-use Instagram Posts downloader. No registration required!",
    keywords:
      "Instagram posts downloader, download Instagram photos, save Instagram videos, Instagram post download tool",
  },
  {
    page: "/instagram-stories-download",
    metaTitle: "Download Instagram Stories | Free Instagram Stories Downloader",
    metaDescription:
      "Easily download Instagram Stories with our free tool. Save stories before they vanish!",
    keywords:
      "Instagram Stories downloader, download Instagram Stories, save Instagram Stories, free Instagram Stories download",
  },
  {
    page: "/instagram-igtv-download",
    metaTitle: "Download IGTV Videos | Free Instagram IGTV Downloader",
    metaDescription:
      "Save Instagram IGTV videos in high resolution with our free IGTV downloader tool. No login required!",
    keywords:
      "IGTV downloader, download IGTV videos, Instagram IGTV download, free IGTV video downloader",
  },
  {
    page: "/facebook-videos-download",
    metaTitle: "Download Facebook Videos | Free Facebook Videos Downloader",
    metaDescription:
      "Easily download Facebook videos in multiple formats with our free online downloader. No account needed!",
    keywords:
      "Facebook videos downloader, download Facebook videos, save Facebook videos, free Facebook video download",
  },
  {
    page: "/facebook-stories-download",
    metaTitle: "Download Facebook Stories | Free Facebook Stories Downloader",
    metaDescription:
      "Save Facebook Stories quickly and easily with our free tool. Download Facebook Stories with just one click.",
    keywords:
      "Facebook Stories downloader, download Facebook Stories, save Facebook Stories, free Facebook story download",
  },
  {
    page: "/tiktok-videos-download",
    metaTitle: "Download TikTok Videos | Free TikTok Videos Downloader",
    metaDescription:
      "Easily download TikTok videos in high quality without watermarks. Use our free TikTok video downloader.",
    keywords:
      "TikTok videos downloader, download TikTok videos, save TikTok videos, free TikTok download",
  },
  {
    page: "/tiktok-stories-download",
    metaTitle: "Download TikTok Stories | Free TikTok Stories Downloader",
    metaDescription:
      "Save TikTok Stories quickly with our free online tool. Download TikTok Stories in just a few steps.",
    keywords:
      "TikTok Stories downloader, download TikTok Stories, save TikTok Stories, free TikTok story download",
  },
  {
    page: "/youtube-videos-download",
    metaTitle: "Download YouTube Videos | Free YouTube Videos Downloader",
    metaDescription:
      "Easily download YouTube videos in various formats and resolutions with our free downloader tool.",
    keywords:
      "YouTube videos downloader, download YouTube videos, save YouTube videos, free YouTube download",
  },
  {
    page: "/youtube-playlists-download",
    metaTitle: "Download YouTube Playlists | Free YouTube Playlists Downloader",
    metaDescription:
      "Easily download full YouTube playlists with our free downloader tool. Save playlists for offline viewing.",
    keywords:
      "YouTube playlists downloader, download YouTube playlists, save YouTube playlists, free YouTube playlist download",
  },
  {
    page: "/social-media-downloader",
    metaTitle:
      "Download Videos from Any Social Media Platform | All-in-One Social Media Downloader",
    metaDescription:
      "Easily download videos from Instagram, Facebook, TikTok, YouTube, and more by pasting the link into our all-in-one social media downloader.",
    keywords:
      "social media downloader, download videos from social media, Instagram downloader, Facebook downloader, TikTok downloader, YouTube downloader",
  },
  {
    page: "/contact-us",
    metaTitle: "Contact Us | Reach Out for Support or Questions",
    metaDescription:
      "Have questions or need assistance? Contact us for support or inquiries regarding our video downloader services.",
    keywords:
      "contact us, customer support, video downloader assistance, help with video download",
  },
];

// add data
export const longBannerAd_468_60: string = `<script type="text/javascript">
	atOptions = {
		'key' : '1567329865272af5c497acad37a4f9c8',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.topcreativeformat.com/1567329865272af5c497acad37a4f9c8/invoke.js"></script>`;

export const bannerAd_300_250: string = `<script type="text/javascript">
	atOptions = {
		'key' : 'efe0d766ac920384a5daf9fb790bc388',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.topcreativeformat.com/efe0d766ac920384a5daf9fb790bc388/invoke.js"></script>`;

export const headerCode: string = `<script type='text/javascript' src='//pl20645602.cpmrevenuegate.com/a3/47/a9/a347a970f1a929f8652481625673fb8c.js'></script>`;

export const bodyCode: string = "";

export const footerCode: string = "";

export const scripts: Script = {
  headerCode,
  footerCode,
  bodyCode,
  adScript: {
    bannerAd_300_250,
    longBannerAd_468_60,
  },
};

export const footer: string = "© 2024 Downloady. All rights reserved.";

export const contact: Contact = {
  phone: "+91 1234567890",
  email: "contact@test.com",
};
