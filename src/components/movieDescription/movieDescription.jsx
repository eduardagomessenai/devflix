import styles from "./movieDescription.module.css";

const MovieDesc = ({ movies }) => {
  const movie = movies;
  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.movieModal}>
        <div className={styles.movieInfo}>
          <img src="https://via.placeholder.com/400" alt="" />
          <button className={styles.btnClose}>x</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
