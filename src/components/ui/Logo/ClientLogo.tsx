const ClientLogo = ({
  source,
  alternative,
}: {
  source: string;
  alternative: string;
}) => {
  return (
    <>
      <img src={source} alt={alternative} className="h-12 grayscale" />
    </>
  );
};

export default ClientLogo;
