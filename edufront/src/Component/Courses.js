import React, { useState , useEffect} from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  // const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    // Fetch courses (subjects) and notifications
    // fetch('http://localhost:8080/api/subjects')
    //   .then(response => response.json())
    //   .then(data => setCourses(data))
    //   .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const courses = [
    {
      name: 'C++',
      content: 'C++ is a powerful general-purpose programming language. It is widely used for system software, game development, and large-scale applications. Learning C++ will give you a solid foundation in object-oriented programming. The language is known for its performance and flexibility, making it ideal for both high-level and low-level programming tasks. By mastering C++, you can develop a deep understanding of memory management, pointers, and complex data structures, which are crucial for advanced software development.'
    },
    {
      name: 'Java',
      content: 'Java is a versatile and widely-used programming language. It is the foundation for many types of networked applications and is the global standard for developing embedded and mobile applications, games, web-based content, and enterprise software. Mastering Java opens doors to a vast array of career opportunities in software development. Java’s platform independence makes it a favorite for large-scale enterprise solutions, and its robust libraries simplify complex coding tasks. By learning Java, you’ll be well-equipped to tackle both backend and frontend development challenges.'
    },
    {
      name: 'Advanced Java',
      content: 'Advanced Java covers specialized topics in Java programming, including Servlets, JSP, and web application development. It is essential for enterprise-level applications. This course prepares you for complex backend development and large-scale system architecture. You’ll dive deep into the intricacies of Java-based frameworks like Spring and Hibernate, which are widely used in the industry. Advanced Java equips you with the skills to develop secure, scalable, and efficient web applications, making you a valuable asset in any software development team.'
    },
    {
      name: '.Net',
      content: '.Net is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. .Net is known for its security, scalability, and cross-platform support. It is ideal for developing robust enterprise solutions across various industries. The framework supports multiple programming languages, including C#, F#, and VB.NET, allowing for flexibility in application development. Learning .Net enables you to create everything from desktop applications to web services, making it a comprehensive platform for modern software development.'
    },
    {
      name: 'MySQL',
      content: 'MySQL is an open-source relational database management system (RDBMS). It is widely used in web applications, data warehousing, and e-commerce for its reliability and ease of use. Understanding MySQL is crucial for managing and querying large datasets efficiently. The course covers fundamental concepts such as database design, normalization, and SQL queries. With MySQL, you’ll gain the skills to optimize databases for performance and scalability, ensuring that your applications run smoothly even under heavy load.'
    },
    {
      name: 'Data Structures using C++',
      content: 'This course covers essential data structures such as arrays, linked lists, stacks, queues, trees, and graphs, all implemented in C++. It is crucial for understanding algorithms and efficient coding. Mastering these data structures will enhance your problem-solving skills in competitive programming and technical interviews. The course emphasizes the implementation details and the underlying principles, helping you to understand the time and space complexity of various operations. By the end of the course, you’ll be able to design and optimize algorithms with a solid understanding of C++.'
    },
    {
      name: 'Data Structures using Java',
      content: 'This course delves into data structures using Java, covering arrays, linked lists, stacks, queues, trees, and graphs. It is essential for mastering algorithm design and efficient problem-solving in Java. The knowledge gained here is vital for building optimized and scalable software solutions. You will explore Java’s built-in data structures and learn how to implement custom structures to solve complex problems. The course also covers advanced topics such as recursion, dynamic programming, and graph algorithms, preparing you for real-world software development challenges.'
    },
  ];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Courses We Offer</h2>
        <Button variant="secondary" onClick={handleBack}>Back</Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((course, index) => (
          <div className="p-3" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{course.subjectName}</Card.Title>
                {/* <Card.Text>
                  {course.content.substring(0, 100)}...
                </Card.Text> */}
                <Button variant="primary" onClick={() => handleShowModal(course)}>View More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse?.subjectName}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <p>{selectedCourse?.content}</p>
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Courses;
