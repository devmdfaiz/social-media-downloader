export interface THeroContent {
  title: string;
  description: string;
}

export interface TSEOData {
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
  seo: TSEOData;
}

export interface Content {
  page: string;
  content: string;
}

export interface Route {
  page: string;
  content: string;
  hero: THeroContent;
  guide: TGuide[];
  testimonials: TTestimonials[];
  faqs: FAQItem[];
  seo: TSEOData;
}

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

// Routes
export const instagramReelsDownload: Route = {
  page: "/instagram-reels-download",
  seo: {
    metaTitle:
      "Download Instagram Reels Videos | Free Instagram Reels Downloader",
    metaDescription:
      "Easily download Instagram Reels videos in high quality with our free online downloader. No signup required!",
    keywords:
      "Instagram Reels downloader, download Instagram Reels, save Instagram Reels, free Instagram video download",
  },
  hero: {
    title: "Download Instagram Reels - Save Reels in HD",
    description:
      "Easily download Instagram Reels with just a link. Save your favorite Reels in high quality directly to your device.",
  },
  guide: [
    {
      title: "Copy the Instagram Reel URL",
      desc: "Open Instagram, find the Reel you want to download, and copy its URL.",
    },
    {
      title: "Paste the URL",
      desc: "Go to our website, paste the link into the input field, and click 'Download'.",
    },
    {
      title: "Download the Reel",
      desc: "Choose your desired quality and download the Reel in seconds.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download Instagram Reels in Seconds</h2>
      <p>
        Instagram Reels have taken the internet by storm. With our downloader, you can now save Reels to watch offline. 
        Whether you're looking to back up your favorite content or share it with others, our tool makes it effortless.
      </p>
      <h3>How to Download Instagram Reels</h3>
      <p>Simply paste the link and let our tool do the rest. You'll get your Reel in various formats and resolutions.</p>
    </section>
  `,
  testimonials: [
    { name: "Ayesha Khan", cont: "I love saving Reels with this tool!" },
    { name: "Rahul S.", cont: "Quick, easy, and works every time." },
  ],
  faqs: [
    {
      question: "Can I download private Instagram Reels?",
      answer:
        "You can only download Reels from public accounts or Reels you have access to.",
    },
    {
      question: "Are there limits on downloads?",
      answer:
        "There's no limit on downloads, but excessive use may lead to temporary restrictions.",
    },
  ],
};

export const instagramPostsDownload: Route = {
  page: "/instagram-posts-download",
  seo: {
    metaTitle: "Download Instagram Posts | Free Instagram Posts Downloader",
    metaDescription:
      "Save Instagram photos and videos with our easy-to-use Instagram Posts downloader. No registration required!",
    keywords:
      "Instagram posts downloader, download Instagram photos, save Instagram videos, Instagram post download tool",
  },
  hero: {
    title: "Download Instagram Posts - Photos and Videos",
    description:
      "Save Instagram posts directly to your device. Our tool supports both photo and video downloads with just a link.",
  },
  guide: [
    {
      title: "Copy the Post Link",
      desc: "Find the Instagram post you want to download, copy its URL, and proceed to our downloader.",
    },
    {
      title: "Paste the Link",
      desc: "Enter the copied URL into our downloader, click 'Get Link', and download the post.",
    },
    {
      title: "Download the Post",
      desc: "Select the format and resolution, and your Instagram post will be ready to download.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download Instagram Posts - Photos and Videos</h2>
      <p>
        Easily download Instagram photos and videos in high quality. Our tool lets you download posts in seconds, 
        making it simple to store your favorite content.
      </p>
      <h3>Why Use Our Instagram Post Downloader?</h3>
      <p>We support multiple formats and quality options, ensuring you always get the best version of the post.</p>
    </section>
  `,
  testimonials: [
    { name: "Alex M.", cont: "Very convenient and easy to use." },
    { name: "Sophie", cont: "Now I can save my favorite posts instantly!" },
  ],
  faqs: [
    {
      question: "Can I download videos as well as photos?",
      answer: "Yes, our downloader supports both Instagram photos and videos.",
    },
  ],
};

export const instagramStoriesDownload: Route = {
  page: "/instagram-stories-download",
  seo: {
    metaTitle: "Download Instagram Stories | Free Instagram Stories Downloader",
    metaDescription:
      "Easily download Instagram Stories with our free tool. Save stories before they vanish!",
    keywords:
      "Instagram Stories downloader, download Instagram Stories, save Instagram Stories, free Instagram Stories download",
  },
  hero: {
    title: "Download Instagram Stories - Save Stories with Ease",
    description:
      "Download Instagram Stories in high quality with just a link. Save any public story directly to your device.",
  },
  guide: [
    {
      title: "Copy the Story Link",
      desc: "Find the Instagram story you want to save, copy its URL, and proceed to our website.",
    },
    {
      title: "Paste the Link",
      desc: "Paste the copied link into the downloader and hit 'Download'.",
    },
    {
      title: "Download the Story",
      desc: "Choose the resolution and save the Instagram story to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download Instagram Stories Quickly and Easily</h2>
      <p>
        With our downloader, you can save Instagram Stories before they disappear. Whether it’s a photo or video, 
        you can save any public story effortlessly.
      </p>
      <h3>How Does It Work?</h3>
      <p>Just paste the Instagram Story link and select your download preferences.</p>
    </section>
  `,
  testimonials: [
    { name: "Sameer", cont: "I saved my favorite stories easily!" },
    { name: "Natasha", cont: "So simple and quick. Love this tool!" },
  ],
  faqs: [
    {
      question: "Can I download stories from private accounts?",
      answer:
        "No, only stories from public accounts are available for download.",
    },
  ],
};

export const instagramIGTVDownload: Route = {
  page: "/instagram-igtv-download",
  seo: {
    metaTitle: "Download IGTV Videos | Free Instagram IGTV Downloader",
    metaDescription:
      "Save Instagram IGTV videos in high resolution with our free IGTV downloader tool. No login required!",
    keywords:
      "IGTV downloader, download IGTV videos, Instagram IGTV download, free IGTV video downloader",
  },
  hero: {
    title: "Download Instagram IGTV Videos - Save IGTV in HD",
    description:
      "Easily download Instagram IGTV videos in high definition with just a URL. Save your favorite long-form videos directly to your device.",
  },
  guide: [
    {
      title: "Copy the IGTV Link",
      desc: "Find the IGTV video you want to download, copy its URL from Instagram.",
    },
    {
      title: "Paste the IGTV URL",
      desc: "Paste the copied IGTV URL into our downloader and click 'Download'.",
    },
    {
      title: "Download IGTV Video",
      desc: "Select the resolution and format, then save the IGTV video to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download Instagram IGTV Videos Effortlessly</h2>
      <p>
        Whether you want to save long-form content or archive IGTV videos for later, our IGTV downloader makes it simple. 
        Download videos in just a few clicks, ensuring you never miss out on your favorite content.
      </p>
      <h3>Why Choose Our IGTV Downloader?</h3>
      <p>Enjoy high-quality downloads in multiple formats. It’s fast, reliable, and easy to use.</p>
    </section>
  `,
  testimonials: [
    {
      name: "Priya R.",
      cont: "Perfect for saving longer videos from Instagram.",
    },
    {
      name: "Josh",
      cont: "I use this to archive my favorite IGTVs. Works flawlessly!",
    },
  ],
  faqs: [
    {
      question: "Does this work for private IGTV videos?",
      answer:
        "You can only download IGTV videos from public accounts or those you have access to.",
    },
    {
      question: "Can I download in HD?",
      answer: "Yes, our IGTV downloader supports HD and SD formats.",
    },
  ],
};

export const facebookVideosDownload: Route = {
  page: "/facebook-videos-download",
  seo: {
    metaTitle: "Download Facebook Videos | Free Facebook Videos Downloader",
    metaDescription:
      "Easily download Facebook videos in multiple formats with our free online downloader. No account needed!",
    keywords:
      "Facebook videos downloader, download Facebook videos, save Facebook videos, free Facebook video download",
  },
  hero: {
    title: "Download Facebook Videos - Save in HD or SD",
    description:
      "Download Facebook videos instantly with just a link. Our tool supports high and standard definition video downloads.",
  },
  guide: [
    {
      title: "Copy the Video Link",
      desc: "Locate the Facebook video you want to download and copy its link.",
    },
    {
      title: "Paste the Link",
      desc: "Enter the copied URL into our Facebook video downloader and click 'Download'.",
    },
    {
      title: "Download the Video",
      desc: "Choose your preferred format (HD/SD) and download the video to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download Facebook Videos Easily</h2>
      <p>
        With our downloader, you can save Facebook videos in both HD and SD quality. Whether it's a public video or content shared with you, 
        our tool makes it effortless to save them.
      </p>
      <h3>Why Use Our Facebook Video Downloader?</h3>
      <p>Quick, easy, and supports various formats to suit your needs.</p>
    </section>
  `,
  testimonials: [
    { name: "Ravi K.", cont: "Best way to save videos from Facebook." },
    { name: "Maria", cont: "Very fast and the quality is great!" },
  ],
  faqs: [
    {
      question: "Can I download private Facebook videos?",
      answer:
        "You can only download videos that are publicly available or shared with you directly.",
    },
  ],
};

export const facebookStoriesDownload: Route = {
  page: "/facebook-stories-download",
  seo: {
    metaTitle: "Download Facebook Stories | Free Facebook Stories Downloader",
    metaDescription:
      "Save Facebook Stories quickly and easily with our free tool. Download Facebook Stories with just one click.",
    keywords:
      "Facebook Stories downloader, download Facebook Stories, save Facebook Stories, free Facebook story download",
  },
  hero: {
    title: "Download Facebook Stories - Save Stories Easily",
    description:
      "Download Facebook Stories before they disappear. Save stories in high quality directly to your device.",
  },
  guide: [
    {
      title: "Copy the Story Link",
      desc: "Find the Facebook Story you want to save, copy its link, and head to our downloader.",
    },
    {
      title: "Paste the Link",
      desc: "Paste the copied URL into the downloader and click 'Download'.",
    },
    {
      title: "Download the Story",
      desc: "Select the quality and save the story to your device instantly.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Save Facebook Stories in Seconds</h2>
      <p>
        Facebook Stories disappear after 24 hours, but with our tool, you can save them before they're gone. 
        Download both photo and video stories in high quality quickly.
      </p>
      <h3>How Does Our Downloader Work?</h3>
      <p>Simply copy the story link and paste it into our tool for quick downloading.</p>
    </section>
  `,
  testimonials: [
    { name: "Nikhil P.", cont: "Great tool for saving Facebook stories!" },
    { name: "Lara T.", cont: "Easy to use and very fast." },
  ],
  faqs: [
    {
      question: "Can I download private stories?",
      answer:
        "Only stories that are publicly available or shared with you can be downloaded.",
    },
  ],
};

export const tiktokVideosDownload: Route = {
  page: "/tiktok-videos-download",
  seo: {
    metaTitle: "Download TikTok Videos | Free TikTok Videos Downloader",
    metaDescription:
      "Easily download TikTok videos in high quality without watermarks. Use our free TikTok video downloader.",
    keywords:
      "TikTok videos downloader, download TikTok videos, save TikTok videos, free TikTok download",
  },
  hero: {
    title: "Download TikTok Videos - Save Videos Without Watermark",
    description:
      "Download TikTok videos without a watermark and in high quality. Save your favorite videos directly to your device.",
  },
  guide: [
    {
      title: "Copy the TikTok Video Link",
      desc: "Find the TikTok video you want to download, copy its link, and head to our downloader.",
    },
    {
      title: "Paste the Link",
      desc: "Paste the copied link into our TikTok video downloader and click 'Download'.",
    },
    {
      title: "Download the Video",
      desc: "Select the format and save the TikTok video to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download TikTok Videos Without Watermark</h2>
      <p>
        Whether you're a creator or a fan, saving TikTok videos without the watermark has never been easier. 
        Use our downloader to save videos in high quality for offline viewing or sharing.
      </p>
      <h3>Why Download TikToks Without Watermark?</h3>
      <p>It’s perfect for repurposing content or sharing without the branding distractions.</p>
    </section>
  `,
  testimonials: [
    { name: "Neha", cont: "Love saving TikToks without the watermark!" },
    { name: "John S.", cont: "Works perfectly and very quick." },
  ],
  faqs: [
    {
      question: "Can I download TikTok videos with sound?",
      answer: "Yes, our downloader saves the video with its original audio.",
    },
  ],
};

export const tiktokStoriesDownload: Route = {
  page: "/tiktok-stories-download",
  seo: {
    metaTitle: "Download TikTok Stories | Free TikTok Stories Downloader",
    metaDescription:
      "Save TikTok Stories quickly with our free online tool. Download TikTok Stories in just a few steps.",
    keywords:
      "TikTok Stories downloader, download TikTok Stories, save TikTok Stories, free TikTok story download",
  },
  hero: {
    title: "Download TikTok Stories - Save Stories Without Watermark",
    description:
      "Easily download TikTok stories without a watermark and in high quality. Save your favorite stories directly to your device.",
  },
  guide: [
    {
      title: "Copy the TikTok Story Link",
      desc: "Find the TikTok story you want to save, copy its link, and head to our downloader.",
    },
    {
      title: "Paste the Story Link",
      desc: "Paste the copied link into the downloader and click 'Download'.",
    },
    {
      title: "Download the Story",
      desc: "Select the resolution and save the story without the watermark.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download TikTok Stories Easily</h2>
      <p>
        TikTok stories disappear after 24 hours, but our tool allows you to save them before they're gone. 
        Download stories in high quality without any watermark for offline viewing.
      </p>
      <h3>How to Save TikTok Stories</h3>
      <p>Copy the story link, paste it in our downloader, and choose your download settings.</p>
    </section>
  `,
  testimonials: [
    { name: "Riya M.", cont: "Finally, a way to save TikTok stories!" },
    { name: "Mark", cont: "Fast and watermark-free downloads." },
  ],
  faqs: [
    {
      question: "Can I download TikTok stories from private accounts?",
      answer:
        "You can only download TikTok stories that are publicly available or shared with you.",
    },
  ],
};

export const youtubeVideosDownload: Route = {
  page: "/youtube-videos-download",
  seo: {
    metaTitle: "Download YouTube Videos | Free YouTube Videos Downloader",
    metaDescription:
      "Easily download YouTube videos in various formats and resolutions with our free downloader tool.",
    keywords:
      "YouTube videos downloader, download YouTube videos, save YouTube videos, free YouTube download",
  },
  hero: {
    title: "Download YouTube Videos - Save in HD, MP3, or MP4",
    description:
      "Download YouTube videos quickly in multiple formats, including HD, MP3, and MP4. Save your favorite videos for offline viewing.",
  },
  guide: [
    {
      title: "Copy the Video Link",
      desc: "Find the YouTube video you want to download, copy its link.",
    },
    {
      title: "Paste the Link",
      desc: "Paste the copied link into our YouTube downloader and click 'Download'.",
    },
    {
      title: "Download the Video",
      desc: "Choose the format (HD, MP3, MP4) and download the video to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download YouTube Videos in High Quality</h2>
      <p>
        Save your favorite YouTube content quickly and easily with our video downloader. Choose between HD quality for watching, 
        or convert videos to MP3 for audio playback.
      </p>
      <h3>Multiple Download Options</h3>
      <p>Whether you need video or just the audio, we've got you covered with flexible format options.</p>
    </section>
  `,
  testimonials: [
    { name: "Akshay P.", cont: "Great tool for downloading YouTube videos!" },
    { name: "Jessica M.", cont: "Fast and supports all formats I need!" },
  ],
  faqs: [
    {
      question: "Can I download YouTube videos in HD?",
      answer: "Yes, our downloader supports HD video downloads.",
    },
    {
      question: "Can I convert YouTube videos to MP3?",
      answer:
        "Yes, you can easily convert YouTube videos to MP3 for audio-only files.",
    },
  ],
};

export const youtubeShortsDownload: Route = {
  page: "/youtube-shorts-download",
  seo: {
    metaTitle: "Download YouTube Shorts | Free YouTube Shorts Downloader",
    metaDescription:
      "Easily download YouTube Shorts in various formats and resolutions with our free and fast downloader tool.",
    keywords:
      "YouTube Shorts downloader, download YouTube Shorts, save YouTube Shorts, free YouTube Shorts download",
  },
  hero: {
    title: "Download YouTube Shorts - Save in HD",
    description:
      "Quickly download YouTube Shorts in high quality. Save these short-form videos directly to your device.",
  },
  guide: [
    {
      title: "Copy the YouTube Shorts Link",
      desc: "Find the YouTube Shorts video you want to download, copy its link.",
    },
    {
      title: "Paste the Link",
      desc: "Paste the copied link into our YouTube Shorts downloader and click 'Download'.",
    },
    {
      title: "Download the Shorts Video",
      desc: "Select the quality and save the Shorts video to your device.",
    },
  ],
  content: `
    <section class="p-6">
      <h2>Download YouTube Shorts in Seconds</h2>
      <p>
        Save short-form content from YouTube directly to your phone or desktop. Our YouTube Shorts downloader ensures high-quality video downloads every time.
      </p>
      <h3>Why Download YouTube Shorts?</h3>
      <p>Capture the creativity of Shorts for offline viewing or sharing with others. Perfect for keeping your favorite content in your library.</p>
    </section>
  `,
  testimonials: [
    { name: "Saurabh", cont: "Best downloader for YouTube Shorts!" },
    { name: "Anna", cont: "Works great and saves in high quality." },
  ],
  faqs: [
    {
      question: "Can I download Shorts in high quality?",
      answer: "Yes, our downloader supports downloading YouTube Shorts in HD.",
    },
  ],
};

export const socialMediaDownloader: Route = {
  page: "/social-media-downloader",
  seo: {
    metaTitle:
      "Download Videos from Any Social Media Platform | All-in-One Social Media Downloader",
    metaDescription:
      "Easily download videos from Instagram, Facebook, TikTok, YouTube, and more by pasting the link into our all-in-one social media downloader.",
    keywords:
      "social media downloader, download videos from social media, Instagram downloader, Facebook downloader, TikTok downloader, YouTube downloader",
  },
  hero: {
    title: "Social Media Downloader - Download Videos from Any Social Platform",
    description:
      "Paste any social media link to download videos from platforms like Instagram, Facebook, TikTok, YouTube, and more. Our all-in-one downloader supports multiple formats and resolutions.",
  },
  guide: [
    {
      title: "Copy the URL",
      desc: "Open the Instagram application or website, copy the URL of the photo, video, reels, carousel, IGTV.",
    },
    {
      title: "Paste the Link",
      desc: "Return to our website, paste the link into the input field and click the 'Download' button.",
    },
    {
      title: "Download",
      desc: "Quickly you will get the results with several quality options. Download what fits your needs.",
    },
  ],
  content: `
    <div class="max-w-7xl mx-auto p-6">
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">
        Social Media Downloader - All-in-One Downloader for Your Needs
      </h2>
      <p class="text-lg leading-relaxed mb-4">
        Our Social Media Downloader is your go-to solution for downloading content from various platforms. Whether it's videos, photos, or stories, we've got you covered with a user-friendly interface.
      </p>
      <h3 class="text-xl font-semibold mb-3">Supported Platforms</h3>
      <ul class="list-disc pl-5 space-y-3 text-lg">
        <li>Instagram</li>
        <li>Facebook</li>
        <li>TikTok</li>
        <li>YouTube</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3">How to Use the Social Media Downloader?</h3>
      <ol class="list-decimal pl-5 space-y-3 text-lg">
        <li>Select the platform from which you want to download content.</li>
        <li>Copy the URL of the video or post.</li>
        <li>Paste it into our downloader tool and click "Download."</li>
        <li>Choose your preferred format and quality to save the content.</li>
      </ol>
    </section>
    </div>
  `,
  testimonials: [
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
  ],
  faqs: [
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
  ],
};

export const customRoutes: string[] = [
  "/social-media-downloader",
  "/instagram-reels-download",
  "/instagram-posts-download",
  "/instagram-stories-download",
  "/instagram-igtv-download",
  "/facebook-videos-download",
  "/facebook-stories-download",
  "/tiktok-videos-download",
  "/tiktok-stories-download",
  "/youtube-videos-download",
  "/youtube-shorts-download",
];

export const policyRoute: string[] = ["/terms-of-service", "/privacy-policy"];

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
  seo: {
    metaTitle: "Contact Us | Reach Out for Support or Questions",
    metaDescription:
      "Have questions or need assistance? Contact us for support or inquiries regarding our video downloader services.",
    keywords:
      "contact us, customer support, video downloader assistance, help with video download",
  },
  phone: "+91 1234567890",
  email: "contact@test.com",
};
