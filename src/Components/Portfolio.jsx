/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/school.jpg";

const imageAltText = "school buildings";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Daily life on Bilibili",
    description:"My first step to share creative ideas! You can find different videos.",
    url: " https://b23.tv/iEmdnz2",
  },
  {
    title: "Xiaohongshu",
    description:"A great app and platfrom to share my daily life!",
    url: "https://www.xiaohongshu.com/user/profile/5c7494da000000001002b46d?xhsshare=CopyLink&appuid=5c7494da000000001002b46d&apptime=1710948209",
  },
  {
    title: "My MLSA Introduction",
    description:
      "You can see my intreduction about Microsoft Learn Student Ambassadors.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/169c3d28-b5ae-48d2-9524-d8231e254df2",
  },
  {
    title: "Something interesting in Douyin",
    description:
      "Find some fun here!",
    url: "https://v.douyin.com/iFXTHnE3/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
