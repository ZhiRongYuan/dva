import AppMenu from '../../components/AppMenu';

function ExtendIndex({ children }) {
  return (
    <div style={{ height: '100%' }}>
      <AppMenu />
      <div style={{ width: 'calc(100% - 200px)', height: '100%', float: 'left', overflow: 'auto' }}>
        {
          children
        }
      </div>
    </div>
  );
};
export default ExtendIndex;
