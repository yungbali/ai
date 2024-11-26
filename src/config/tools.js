export const TOOLS = {
    "EPK Generator": {
      model: "anthropic.claude-3-sonnet-20240229-v1:0",
      type: "text",
      provider: "anthropic",
      temperature: 0.7,
      top_p: 0.99,
      description: "Generate professional Electronic Press Kits for artists",
      icon: "📋"
    },
    "Album Art Creator": {
      model: "stability.stable-diffusion-xl-v1",
      type: "image",
      provider: "stability",
      steps: 50,
      cfg_scale: 10,
      seed: 42,
      description: "Create stunning album artwork using AI",
      icon: "🎨"
    },
    // ... other tools
  };