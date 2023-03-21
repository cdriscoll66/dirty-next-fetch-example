import React from "react";
import styles from "../../styles/Home.module.css";
import Menu from "../../components/menu";

export default class PostList extends React.Component {
    state = {
        posts: [],
      };

      
    componentDidMount() {
        fetch(`http://localhost:1337/api/posts?populate=*`)
          .then((response) => response.json())
          .then((data) => {
            console.log("This is your data", data);
            this.setState({ posts: [...data.data] });
          });


      }



  render() {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.center}>Conor's List of blogposts </h1>
          </div>
          <ul className={styles.list}>
            {this.state.posts.length &&
              this.state.posts.map((post) => (
                <li key={post.id} className={styles.item}>
                  <h3>{post.attributes.title}</h3>
                  </li>
              ))}
          </ul>
          <Menu />
        </main>
      </>
    );
  }
}
