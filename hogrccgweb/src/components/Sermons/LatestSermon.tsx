import { useSermons, getLatestSermon } from "../../hooks/useSermon";
const LatestSermon = () => {
    const { data: sermons, isLoading, isError } = useSermons();
  
    if (isLoading) return <p>Loading closest events...</p>;
    if (isError) return <p>Failed to load events. Please try again later.</p>;
  
    const latestSermon = sermons ? getLatestSermon(sermons) : null;
    return (
        <>
              <div className="flex justify-center items-center py-10 bg-white md:px-[50px] px-[20px]">
            <iframe
              width="560"
              height="315"
              src={latestSermon?.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </>
    )
}

export default LatestSermon;