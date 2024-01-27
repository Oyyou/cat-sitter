import styles from "./reviewsCarousel.module.scss";

const reviews = [
    {
        author: "Marv",
        date: "7 July, 2022",
        comment: "Mooooooooooooooooooooow!",
        image: "/Marv.webp"
    },
    {
        author: "Harry",
        date: "21 September, 2022",
        comment: "Meow?",
        image: "/Harry.webp"
    },
    {
        author: "Nyla",
        date: "25 January, 2024",
        comment: "Ma",
        image: "/Nyla.webp"
    }
];

const Reviews = () => {
    return (
        <div className={styles.reviewsContainer}>
            <div className={styles.reviewsHeader}>
                <h3>Reviews</h3>
            </div>
            <div className={styles.reviewsContent}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.reviewItem}>
                        <div className={styles.reviewText}>
                            <p>- <span>{review.comment}</span></p>
                        </div>
                        <div className={styles.reviewInfo}>
                            <img src={review.image} alt={review.author} className={styles.reviewImage} />
                            <div>
                                <p className={styles.reviewAuthor}>{review.author}</p>
                                <p className={styles.reviewDate}>{review.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews;
