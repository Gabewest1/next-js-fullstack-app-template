import styles from "./CatCard.module.css"

export interface ICatCard {
  sampleTextProp: string
}

const CatCard: React.FC<ICatCard> = ({ sampleTextProp }) => (
  <div className={styles.container}>
    <div>Cat Card</div>
    <div>{sampleTextProp}</div>
    <div>{sampleTextProp}</div>
  </div>
)

export default CatCard
