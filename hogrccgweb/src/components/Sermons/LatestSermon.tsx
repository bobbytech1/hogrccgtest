const LatestSermon = () => {
    return (
        <>
              <div className="flex justify-center items-center py-10 bg-white md:px-[50px] px-[20px]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tumnm9IF2fw?si=odKpGMQ8gNs7SQpv"
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