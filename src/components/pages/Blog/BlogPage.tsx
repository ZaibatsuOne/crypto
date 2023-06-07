import BlogItem from "./Blog-item/BlogItem";
import styles from "./BlogPage.module.scss";
import { blogItem } from "src/ts/BlogItem";
import { FC } from "react";

const BlogPage: FC = () => {
  return (
    <section>
      <section className={styles.gridlist}>
        {blogItem.map((item) => (
          <article className={styles.item} key={item.id}>
            <BlogItem
              title={item.title}
              excerpt={item.excerpt}
              thumbail={item.img}
              userAvatar={item.userAvatar}
              userName={item.userName}
            />
          </article>
        ))}
      </section>
    </section>
  );
};

export default BlogPage;
