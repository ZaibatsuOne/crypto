export const pVariants = {
  visible: (i: number) => ({
    opacity: 1,
    duration: {
      delay: i * 0.6,
    },
  }),
  hidden: { opacity: 0 },
};
export const sectionVariant = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 250, opacity: 0 },
};
