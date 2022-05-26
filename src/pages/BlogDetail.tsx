import BlogDetailContent from "./../components/BlogDetailContent";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const BlogDetail = () => {
  return (
    <>
      <Header />
      <div className="blog-detail container">
        {/* <SlideBar /> */}
        <BlogDetailContent slideBar={false} />
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
