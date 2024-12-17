import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { AboutCards as AboutCardsData } from "../../data"; // Rename imported data
import { Box } from "@mui/joy";

// Rename the component to AboutCardList
const AboutCardList = () => {
    return (
        <>
            <div className=" bg-white md:px-10 px-6 pt-6 pb-10 mt-10">
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                        gap: 2,
                    }}
                >
                    {AboutCardsData.map((card) => (
                        <Card
                            variant="outlined"
                            sx={{ backgroundColor: "#ffffff" }}
                            key={card.id}
                        >
                            <AspectRatio>
                                <div className="text-4xl text-blue-500 mb-4">
                                    {typeof card.imageUrl === "string" ? (
                                        <img
                                            src={card.imageUrl}
                                            alt={card.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                    ) : (
                                        <card.imageUrl />
                                    )}
                                </div>
                            </AspectRatio>
                            <div>
                                {/* Truncated Title */}
                                <Typography
                                    level="title-md"
                                    sx={{
                                        fontSize: "17px",
                                        fontWeight: 600,
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 1, // Limit to 1 line
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                {/* Truncated Paragraph */}
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 4, // Limit to 4 lines
                                        WebkitBoxOrient: "vertical",
                                        marginTop: "4px",
                                        fontSize: "14px",
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </div>
                        </Card>
                    ))}
                </Box>
            </div>
        </>
    );
};

export default AboutCardList;
