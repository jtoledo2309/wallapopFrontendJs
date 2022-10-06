class PubSub {
  TOPICS = {
    PRODUCT_LOAD_ERROR: "PRODUCT_LOAD_ERROR",
  };

  constructor() {
    this.topics = {};
    this.hOP = this.topics.hasOwnProperty;
  }

  subscribe(topic, listener) {
    // Create the topic's object if not yet created
    if (!this.hOP.call(this.topics, topic)) this.topics[topic] = [];

    // Add the listener to queue
    var index = this.topics[topic].push(listener) - 1;

    // Provide handle back for removal of topic
    return {
      remove: function () {
        delete this.topics[topic][index];
      },
    };
  }

  publish(topic, info) {
    console.log(topic, info);
    // If the topic doesn't exist, or there's no listeners in queue, just leave
    if (!this.hOP.call(this.topics, topic)) return;

    // Cycle through topics queue, fire!
    this.topics[topic].forEach(function (item) {
      item(info != undefined ? info : {});
    });
  }
}

export const pubSub = new PubSub();
