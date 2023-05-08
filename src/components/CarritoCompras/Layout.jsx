import '../../index.css'

const styles = {
  container: {
    width: "900px",
    position:'relative',
    // display:'flex',
    // flexDirection:'column'
  },
};


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div style={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
