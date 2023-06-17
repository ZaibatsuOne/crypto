export const pVariants = {
  visible: (i: number) => ({
    opacity: 1,
    duration: {
      delay: i * 0.6,
    },
  }),
  hidden: { opacity: 0 },
};
