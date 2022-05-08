import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' container blog-section'>
                <h1>Here have some significant question answer.</h1>
                <div>
                    <h2>1: Difference between javascript and nodejs</h2>
                    <p>Answer: Javascript is programming language. Its can runs any browser javascript engine. But Node js is a running environment for javascript programming language or interpreter. And node requires libraries for easily access from js.</p>
                </div>
                <div>
                    <h2>2: When should you use nodejs and when should you use mongodb</h2>
                    <p>Answer: Node js use for api application with both relational and non-relational databases. Its use building real-time applications like messaging, notifications delivery, live streaming and collaboration tools. for microservices. <br />
                        Mongodb use when your data is document centric of a relational database. when you need to accommodate massive scale, when you are rapidly prototyping.  </p>
                </div>
                <div>
                    <h2>3: Differences between sql and nosql databases</h2>
                    <p>Answer: SQL: sql database ia fixed or predefined schema. Its called (RDBMS) Its vertically scalable. These database are best for complex queries. <br />
                        NoSQL: Its non relational database system. They have dynamic schema. These is best suited for hierarrchical data storage. </p>
                </div>
                <div>
                    <h2>4: What is the purpose of jwt and how does it work</h2>
                    <p>Answer: JWT means JSON Web Token. JWT is used to security information between a client and a server site.
                        <br />
                        Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. A JWT is a string made up of three parts, separated by dots.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;