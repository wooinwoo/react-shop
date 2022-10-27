interface dataProps {
  depth1: string;
  depth2: string;
}
const Breadcrumbs = ({ depth1, depth2 }: dataProps) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{depth1}</li>
        <li>{depth2}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
