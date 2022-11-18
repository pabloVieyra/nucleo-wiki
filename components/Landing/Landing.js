import React from "react";
import estilos from "./Landing.module.css";
import logo from "../../public/Images/logowiki.png";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Landing = ({postLanding}) => {
  return (
    <>
      <div className={estilos.sectionLanding}>
      {postLanding.map((postLanding) => {
              return (
                <>
        <div className={estilos.title} key={postLanding.id}>
          <h1>{postLanding.name}</h1>
        </div>
        <div className={estilos.sectionPost}>
          <div className={estilos.containerPost}>
            {postLanding.post.map((post) => {
              return (
                <>
                  <h1 className={estilos.titleContainerPost} key={post.id}>
                    {post.name}
                  </h1>
                  <Carousel className={estilos.containerSliderPost}>
                    {post.space.map((space) => {
                      return (
                        <>
                          <div
                            className={estilos.containerSectionPost}
                            key={space.id}
                          >
                            {space.section.map((section) => {
                              return (
                                <>
                                  {section.posts.map((posts) => {
                                    return (
                                      <>
                                        <div
                                          className={estilos.post}
                                          key={posts.id}
                                        >
                                          <h2
                                            className={estilos.titlePost}
                                            key={posts.id}
                                          >
                                            {posts.name}
                                          </h2>
                                        </div>
                                      </>
                                    );
                                  })}
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </>
              );
            })}
          </div>
        </div>
        </>)})}
      </div>
    </>
  );
};

export default Landing;
