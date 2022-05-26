import BlogItem from "./../components/BlogItem";
import Footer from "./../components/Footer";
import Gird from "./../components/Gird";
import Header from "./../components/Header";
import SlideBar from "./../components/SlideBar";

const Blog = () => {
  return (
    <>
      <Header border={true} />
      <div className="container blog">
        <h2 className="blog__title">Blog</h2>
        <div className="blog__wrapper">
          <SlideBar />
          <div className="blog__wrapper__content">
            <Gird col={2}>
              <BlogItem />
            </Gird>
            <Gird col={2}>
              <BlogItem />
            </Gird>
            <Gird col={2}>
              <BlogItem />
            </Gird>
            <Gird col={2}>
              <BlogItem />
            </Gird>
            <Gird col={2}>
              <BlogItem />
            </Gird>
            <Gird col={2}>
              <BlogItem />
            </Gird>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
