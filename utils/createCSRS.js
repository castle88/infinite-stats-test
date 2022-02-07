function createCSRS(csrs) {
  const formatCSRS = csrs.data.map((queue) => {
    const formatted = {
      queue: queue.queue,
      input: queue.input,
      rank: {
        value: queue.response.current.value,
        tier: queue.response.current.tier,
        tier_image_url: queue.response.current["tier_image_url"],
      },
    };

    return formatted;
  });

  return formatCSRS;
}

module.exports = createCSRS;
