// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "research",
          description: "My Research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A Curated, Expanding Showcase of My Signature Projects/Developments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Olaoluwa Akanji&#39;s Résumé.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-courses",
              title: "courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/courses/";
              },
            },{id: "post-welcome",
        
          title: "Welcome!",
        
        description: "Welcome to my Blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/welcome/";
          
        },
      },{id: "books-an-inquiry-into-the-nature-and-causes-of-the-wealth-of-nations",
          title: 'An Inquiry into the Nature and Causes of the Wealth of Nations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/On_The_Wealth_of_Nations/";
            },},{id: "news-a-io2-s-blog-is-now-live",
          title: 'A-IO2’s Blog is now live!',
          description: "",
          section: "News",},{id: "projects-bntu",
          title: 'BNTU',
          description: "Bring NASA To Us",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bntu/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%61%6F%6C%75%61%6B%61%6E%31%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/A-IO2", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/A-IO2", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
