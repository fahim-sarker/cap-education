import React, { useState } from 'react';
import './Bloglist.css';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Bloglist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 

  const blogs = new Array(12).fill(null).map((_, index) => ({
    category: 'Development',
    date: '26 Mar, 2023',
    title: `The Complete Web Developer Guideline 2023 - ${index + 1}`,
    author: 'Darrell Steward',
    position: 'Fronted Developer',
  }));

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="bloglist">
      <Container>
        <Row>
          {currentBlogs.map((blog, index) => (
            <Col lg={4} key={index}>
            <Link to="/blogdetails">
              <div className="blogcards">
                <div className="bloglistcards">
                  <div className="flex1">
                    <p>{blog.category}</p>
                    <h5>{blog.date}</h5>
                  </div>
                  <h3>{blog.title}</h3>
                  <div className="flex2">
                    <div className="roundded"></div>
                    <div className="listtext">
                      <h5>{blog.author}</h5>
                      <p>{blog.position}</p>
                    </div>
                    <div className="iconlist">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <Row>
          <Col>
            <Pagination>
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bloglist;
