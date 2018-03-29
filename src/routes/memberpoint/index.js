import AppMenu from '../../components/AppMenu';

function MemberPointIndex({ children }) {
  return (
    <div>
      <AppMenu />
      {
        children
      }
    </div>
  );
};
export default MemberPointIndex;
