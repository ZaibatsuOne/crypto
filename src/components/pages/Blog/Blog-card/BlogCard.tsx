import axios from "axios";
import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface IBlogCard {
  id: number;
  title: string;
  img: string;
  userName: string;
}

const BlogCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<IBlogCard | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get<IBlogCard[]>(
          `https://6454dae6a74f994b334ad4fb.mockapi.io/Blog?id=${id}`
        );
        setTimeout(() => {
          setBlogPost(response.data[0]);
          setIsLoading(!isLoading);
        }, 1500);
      } catch (error) {
        alert("Возникла ошибка");
      }
    };
    fetchBlog();
  }, []);

  return <div>{blogPost && <div>{blogPost.title}</div>}</div>;
};

export default BlogCard;
