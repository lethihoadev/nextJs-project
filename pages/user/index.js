import { EyeOutlined } from "@ant-design/icons";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

const About = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>All user</h1>
      <div style={{ paddingLeft: 50 }}>
        {users.map((user) => (
          <Link href={"user/" + user.id} key={user?.id} passHref>
            <p>
              <EyeOutlined /> {user?.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
