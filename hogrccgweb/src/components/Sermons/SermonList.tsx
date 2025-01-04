import { useState } from "react";
import { useSermons } from "../../hooks/useSermon"; 
import { Box, Typography, Card, CardMedia, CardContent, Button, Chip, Stack } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid2';

const SermonList = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [open, setOpen] = useState(false);

  // Fetch sermons data using the custom hook
  const { data: sermons, isLoading, isError } = useSermons();

  // Filter sermons by selected tag (category)
  const filteredSermons = selectedTag
    ? sermons?.filter((sermon) => sermon.category === selectedTag)
    : sermons;

  const handleWatchClick = (videoUrl: any) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  if (isLoading) return <p>Loading sermons...</p>;
  if (isError) return <p>Failed to load sermons. Please try again later.</p>;

  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        {/* Filter Section */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mb={4}
          flexWrap="wrap"
          sx={{ gap: { xs: 2, sm: 2 } }}
        >
          {["Faith", "Prayer", "Hope", "Life Challenges", "Trust"].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              color={selectedTag === tag ? "primary" : "default"}
              onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
              clickable
              sx={{
                cursor: "pointer",
                backgroundColor: selectedTag === tag ? "#000" : "transparent", // Black when active
                color: selectedTag === tag ? "#fff" : "#000", // White text color on black
                border: "1px solid black",
                fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                padding: { xs: "4px 8px", sm: "8px 16px" }, // Responsive padding
                minWidth: { xs: "auto", sm: "120px" }, // Ensure Chip takes enough width on larger screens
              }}
              className="font-paragraphFont"
            />
          ))}
        </Stack>

        {/* Sermons Section */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: { md: "50px", xs: "20px" },
            paddingLeft: { md: "50px", xs: "20px" },
          }}
        >
{/* Sermons Section */}
{filteredSermons && filteredSermons.length > 0 ? (
  <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: { md: "50px", xs: "20px" },
      paddingLeft: { md: "50px", xs: "20px" },
    }}
  >
    {filteredSermons.map((sermon) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sermon.id}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={sermon.image}
            alt={sermon.title}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {sermon.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {sermon.date}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "10px", color: "#333" }}
            >
              {sermon.content}
            </Typography>
          </CardContent>
          <Box sx={{ padding: "10px", textAlign: "end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleWatchClick(sermon.video)}
              sx={{
                border: "1px solid #0045B5",
                backgroundColor: "transparent",
                color: "black",
                transition: "box-shadow backgroundColor: #0045b5 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0045B5",
                  color: "white",
                },
              }}
            >
              Watch Now
            </Button>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
) : (
  <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
    No sermons found currently for the selected category.
  </Typography>
)}
        </Grid>

        {/* Dialog for Video Playback */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <AiOutlineClose onClick={handleClose} />
          <DialogContent>
            {selectedVideo && (
              <iframe
                width="100%"
                height="400"
                src={selectedVideo}
                title="Sermon Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </DialogContent>
        </Dialog>

        {/* Call-to-Action Section */}
        <div className="bg-white shadow-lg flex justify-center items-center flex-col rounded-[5px] pt-20 pb-20 md:px-[50px] px-[20px]">
          <h2 className="font-headingFont text-hogblack text-center text-[30px] mb-2 font-semibold">
            Never Miss a Sermon!
          </h2>
          <p className="font-paragraphFont text-hogblack text-center text-[20px] mb-3">
            Subscribe to our YouTube channel to stay updated with the latest
            messages and teachings.
          </p>
          <a
            href="https://www.youtube.com/@glorioushopetv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-[2px]  border-hogblue hover:text-white hover:bg-hogblue hover:transition-all hover:duration-500 cursor-pointer px-4 py-2 rounded-[8px] w-fit font-linkFont"
          >
            Subscribe Now
          </a>
        </div>
      </Box>
    </>
  );
};

export default SermonList;
