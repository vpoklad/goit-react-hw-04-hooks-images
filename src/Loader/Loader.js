import ContentLoader from 'react-content-loader';
const MyLoader = () => (
  <ContentLoader viewBox="0 0 640 390">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="640" height="390" />
  </ContentLoader>
);

export default MyLoader;
