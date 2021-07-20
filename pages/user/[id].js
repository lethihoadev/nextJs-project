export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const Detail = ({ user }) => {
  return (
    <div>
      <h2>Detail page</h2>
      <p>
        <div>
          <b>Name: </b>
          {user.name}
        </div>
        <div>
          <b>Email: </b>
          {user.email}
        </div>
        <div>
          <b>Address: </b>
          {user.address.street}
        </div>
      </p>
    </div>
  );
};

export default Detail;
