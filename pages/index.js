import React from "react";
import nextimage from "next/image";
import styles from "../styles/Home.module.css";

export default class SongList extends React.Component {
  state = {
    songs: [],
  };

  componentDidMount() {
    fetch(`http://localhost:1337/api/songs?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        console.log("This is your data", data);
        this.setState({ songs: [...data.data] });
      });
  }

  render() {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.center}>Conor's List of Banger Tracks </h1>
        <ul className={styles.list}>
            {this.state.songs.length &&
              this.state.songs.map((song) => (
                <li key={song.id} className={styles.item}>
                  <img src={'http://localhost:1337'+song.attributes.coverImage.data.attributes.formats.thumbnail.url} alt={song.attributes.Title} />
                  <h3>{song.attributes.Title}</h3>
                  <p> {song.attributes.Description}</p>
                  <p> Is it a Banger?: {song.attributes.isBanger? 'absolutely!' : 'nah'}</p>
                  </li>
              ))}
          </ul>
          </div>
        </main>
      </>
    );
  }
}
