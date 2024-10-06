INSERT INTO users (email, first_name, last_name, password)
VALUES ('admin@meal-planner.com', 'Admin', 'ADMIN', 'admin-password');

## Vegetarain recipes
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegetable Stir-Fry with Tofu',
    '{\n    \"1.\": \"Press tofu to remove excess water and cube it. \",\n    \"2.\": \"Slice the bell peppers and onion. Mince the garlic. \",\n    \"3.\": \"Heat olive oil in a large pan or wok over medium heat. \",\n    \"4.\": \"Add tofu cubes and cook until golden on all sides, about 5 minutes. Remove and set aside. \",\n    \"5.\": \"In the same pan, add garlic and onions, sauté until onions are translucent. \",\n    \"6.\": \"Add bell peppers and cook for 3-4 minutes until they start to soften. \",\n    \"7.\": \"Return the tofu to the pan. Add soy sauce and water, stirring well. Mix cornstarch with a little water and add to the pan to thicken the sauce if desired. \",\n    \"8.\": \"Stir in sesame oil for extra flavor. Cook for another 2 minutes. \",\n    \"9.\": \"Serve hot over cooked rice or noodles. \"\n}',
    'Allergens: Soy (from tofu and soy sauce), gluten (if using regular soy sauce; use gluten-free soy sauce if needed)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegetable+Stir-Fry+with+Tofu.jpg',
    'VEGETARIAN',
    'STIR-FRY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Spinach and Chickpea Curry',
    '{\n    \"1.\": \"Dice the onion and mince the garlic.\",\n    \"2.\": \"Drain and rinse the chickpeas.\",\n    \"3.\": \"Heat olive oil in a large pan over medium heat. Add onions and garlic, and sauté until onions are translucent.\",\n    \"4.\": \"Stir in the curry powder and cook for 1 minute to release the flavors.\",\n    \"5.\": \"Add the diced tomatoes, chickpeas, and coconut milk. Simmer for 10 minutes.\",\n    \"6.\": \"Add spinach and cook until wilted, about 2-3 minutes. Season with salt.\",\n    \"7.\": \"Serve hot over cooked rice.\"}',
    'Allergens: None (check for any cross-contamination in canned goods)',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/chickpea-and-spinach-curry-7.jpg',
    'VEGETARIAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Tomato Basil Pasta',
    '{\n    \"1.\": \"Cook pasta according to package instructions until al dente. Drain and set aside.\",\n    \"2.\": \"Halve the cherry tomatoes and mince the garlic. Chop the basil leaves.\",\n    \"3.\": \"In a large pan, heat olive oil over medium heat. Add garlic and sauté until fragrant, about 1 minute.\",\n    \"4.\": \"Add the cherry tomatoes and cook until they start to soften and release their juices, about 5-7 minutes.\",\n    \"5.\": \"Add the cooked pasta to the pan and toss to coat with the tomato mixture. Season with salt and pepper.\",\n    \"6.\": \"Stir in the chopped basil and cook for an additional 2 minutes.\",\n    \"7.\": \"Serve hot, topped with grated Parmesan cheese if desired.\"}',
    'Allergens: Gluten (from pasta), dairy (if adding Parmesan cheese)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/23265-Tomato-Basil-Pasta.jpg',
    'VEGETARIAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Stuffed Bell Peppers',
    '{\n    \"1.\": \"Preheat the oven to 375°F (190°C).\",\n    \"2.\": \"Cook quinoa according to package instructions. Dice the onion and mince the garlic.\",\n    \"3.\": \"Heat olive oil in a pan over medium heat. Add onions and garlic, sauté until onions are translucent.\",\n    \"4.\": \"Mix the cooked quinoa with the onion mixture. Season with salt and pepper.\",\n    \"5.\": \"Stuff each bell pepper with the quinoa mixture and top with shredded cheese.\",\n    \"6.\": \"Place the stuffed peppers in a baking dish and cover with foil.\",\n    \"7.\\": \"Bake for 30 minutes, then remove the foil and bake for an additional 10 minutes until the cheese is melted and bubbly.\",\n    \"8.\": \"Serve hot, garnished with fresh herbs if desired.\"}',
    'Allergens: Dairy (from cheese)',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Stuffed+Bell+Peppers.jpg',
    'VEGETARIAN',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegetable Frittata',
    '{\n    \"1.\": \"Preheat the oven to 350°F (175°C).\",\n    \"2.\": \"Dice the bell pepper and onion. Chop the spinach.\",\n    \"3.\\": \"In an oven-safe skillet, heat olive oil over medium heat. Add onions and bell peppers, sauté until softened, about 5 minutes.\",\n    \"4.\": \"Add spinach and cook until wilted, about 2 minutes.\",\n    \"5.\": \"In a bowl, whisk together the eggs, salt, and pepper. Pour the egg mixture over the vegetables in the skillet.\",\n    \"6.\": \"Cook on the stovetop for 5 minutes until the edges start to set.\",\n    \"7.\": \"Sprinkle the cheese on top and transfer the skillet to the oven. Bake for 15-20 minutes until the frittata is fully set and the cheese is melted.\",\n    \"8.\": \"Serve warm, cut into wedges.\"}',
    'Allergens: Eggs, dairy (from cheese)',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegetable+Frittata.jpg',
    'VEGETARIAN',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Minestrone Soup',
    '{\n    \"1.\": \"Dice the onion, carrots, and celery. Mince the garlic.\",\n    \"2.\": \"Drain and rinse the kidney beans.\",\n    \"3.\": \"Heat olive oil in a large pot over medium heat. Add onions, garlic, carrots, and celery, and sauté until softened, about 10 minutes.\",\n    \"4.\": \"Add diced tomatoes, kidney beans, vegetable broth, oregano, salt, and pepper. Bring to a boil.\",\n    \"5.\": \"If using, add pasta and cook according to package instructions (about 10 minutes).\",\n    \"6.\": \"Simmer until the pasta is cooked and the flavors meld.\",\n    \"7.\": \"Serve hot, garnished with fresh herbs if desired.\"}',
    'Allergens: Gluten (from pasta; use gluten-free pasta if needed)',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Minestrone+Soupjpg.jpg',
    'VEGETARIAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Grilled Vegetable Sandwich',
    '{\n    \"1.\": \"Preheat the grill or a grill pan over medium-high heat.\",\n    \"2.\": \"Slice the bell pepper, onion, and tomato.\",\n    \"3.\": \"Drizzle olive oil over the bell pepper and onion slices, and season with salt and pepper.\",\n    \"4.\": \"Grill the vegetables for 3-5 minutes on each side until they are tender and have grill marks.\",\n    \"5.\": \"Assemble the sandwich: Layer the grilled vegetables, spinach, and tomato slices between the bread slices. Add shredded cheese if desired.\",\n    \"6.\": \"Grill the assembled sandwich for 2-3 minutes on each side until the bread is toasted and the cheese is melted.\",\n    \"7.\": \"Serve hot, cut in half if desired.\"}',
    'Allergens: Gluten (from bread), dairy (from cheese)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/.+Grilled+Vegetable+Sandwich.jpg',
    'VEGETARIAN',
    'GRILLING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Chickpea Salad',
    '{\n    \"1.\": \"Dice the bell pepper, onion, and tomatoes.\",\n    \"2.\": \"Drain and rinse the chickpeas.\",\n    \"3.\": \"In a large bowl, combine the chickpeas, bell pepper, onion, and tomatoes.\",\n    \"4.\": \"Drizzle with olive oil and lemon juice. Season with salt and pepper.\",\n    \"5.\": \"Toss well to combine. Add fresh herbs if desired.\",\n    \"6.\": \"Serve chilled or at room temperature.\"}',
    'Allergens: None',
    '15 minutes',
    '5 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Chickpea+Salad.jpg',
    'VEGETARIAN',
    'SALAD'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Roasted Vegetable Quinoa Bowl',
    '{\n    \"1.\": \"Preheat the oven to 400°F (200°C).\",\n    \"2.\": \"Cook quinoa according to package instructions. Slice the bell pepper and onion. Mince the garlic.\",\n    \"3.\": \"Toss the bell pepper, onion, and garlic with olive oil, salt, and pepper. Spread on a baking sheet.\",\n    \"4.\": \"Roast in the oven for 20 minutes until tender and slightly charred.\",\n    \"5.\": \"In a large bowl, combine the roasted vegetables with the cooked quinoa and fresh spinach. Toss to combine and season with additional salt and pepper if needed.\",\n    \"6.\": \"Serve warm or at room temperature.\"}',
    'Allergens: None',
    '10 minutes',
    '25 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Roasted+Vegetable+Quinoa+Bowl.jpg',
    'VEGETARIAN',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegetable Skewers',
    '{\n    \"1.\": \"Preheat the grill or a grill pan over medium-high heat.\",\n    \"2.\": \"Cut the vegetables into chunks.\",\n    \"3.\": \"Thread the vegetables onto skewers, alternating the different types.\",\n    \"4.\": \"Brush the skewers with olive oil and sprinkle with oregano, salt, and pepper.\",\n    \"5.\": \"Grill the skewers for 10-15 minutes, turning occasionally, until the vegetables are tender and have grill marks.\",\n    \"6.\": \"Serve hot, optionally with a side of rice or salad.\"}',
    'Allergens: None',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegetable+Skewers.jpg',
    'VEGETARIAN',
    'GRILLING'
);


## Vegan recipes
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Buddha Bowl',
    '{\n    "1.": "Cook quinoa according to package instructions. Slice the bell peppers.",\n    "2.": "In a skillet, heat 1 tbsp olive oil over medium heat. Add the chickpeas and cook until lightly browned, about 5 minutes.",\n    "3.": "Add the spinach to the skillet and cook until wilted, about 2 minutes.",\n    "4.": "In a separate pan, heat the remaining olive oil and sauté the bell peppers until tender, about 5-7 minutes.",\n    "5.": "In a bowl, layer the cooked quinoa, chickpeas, sautéed spinach, and bell peppers.",\n    "6.": "Drizzle with lemon juice and season with salt and pepper.",\n    "7.": "Serve warm or at room temperature."}',
    'Allergens: None',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/.+Vegan+Buddha+Bowl.jpg',
    'VEGAN',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Chili',
    '{\n    "1.": "Dice the onion and bell peppers. Mince the garlic. Drain and rinse the beans.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until onions are translucent.",\n    "3.": "Add bell peppers and cook for 5 minutes until they begin to soften.",\n    "4.": "Stir in the chili powder and cumin, cooking for 1 minute to release the flavors.",\n    "5.": "Add the diced tomatoes and beans, stirring to combine. Simmer for 20 minutes.",\n    "6.": "Serve hot, optionally garnished with fresh cilantro or avocado slices."}',
    'Allergens: None',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Chili.jpg',
    'VEGAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Tofu Stir-Fry',
    '{\n    "1.": "Press tofu to remove excess water and cube it. Slice the bell peppers and onion. Mince the garlic.",\n    "2.": "Heat olive oil in a large pan or wok over medium heat. Add tofu cubes and cook until golden on all sides, about 5 minutes. Remove and set aside.",\n    "3.": "In the same pan, add garlic and onions, sauté until onions are translucent.",\n    "4.": "Add bell peppers and cook for 3-4 minutes until they start to soften.",\n    "5.": "Return the tofu to the pan. Add soy sauce and water, stirring well. Mix cornstarch with a little water and add to the pan to thicken the sauce if desired.",\n    "6.": "Stir in sesame oil for extra flavor. Cook for another 2 minutes.",\n    "7.": "Serve hot over cooked rice or noodles."}',
    'Allergens: Soy (from tofu and soy sauce), gluten (if using regular soy sauce; use gluten-free soy sauce if needed)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Tofu+Stir-Fry.jpg',
    'VEGAN',
    'STIR-FRY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Lentil Soup',
    '{\n    "1.": "Rinse the lentils. Dice the onion and mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until onions are translucent.",\n    "3.": "Stir in the cumin and cook for 1 minute to release the flavors.",\n    "4.": "Add the lentils, diced tomatoes, and vegetable broth. Bring to a boil, then reduce heat and simmer for 20 minutes until lentils are tender.",\n    "5.": "Add spinach and cook until wilted, about 2-3 minutes. Season with salt and pepper.",\n    "6.": "Serve hot, optionally with a squeeze of lemon juice."}',
    'Allergens: None',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Lentil+Soup.jpg',
    'VEGAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Quinoa Salad',
    '{\n    "1.": "Cook quinoa according to package instructions. Dice the bell pepper, onion, and tomatoes.",\n    "2.": "In a large bowl, combine the cooked quinoa, bell pepper, onion, and tomatoes.",\n    "3.": "Drizzle with olive oil and lemon juice. Season with salt and pepper.",\n    "4.": "Toss well to combine. Add fresh herbs if desired.",\n    "5.": "Serve chilled or at room temperature."}',
    'Allergens: None',
    '15 minutes',
    '5 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Quinoa+Salad.jpg',
    'VEGAN',
    'SALAD'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Stuffed Peppers',
    '{\n    "1.": "Preheat the oven to 375°F (190°C). Cook quinoa according to package instructions. Dice the onion and mince the garlic.",\n    "2.": "Heat olive oil in a pan over medium heat. Add onions and garlic, sauté until onions are translucent.",\n    "3.": "Mix the cooked quinoa with the onion mixture and black beans. Season with salt and pepper.",\n    "4.": "Stuff each bell pepper with the quinoa mixture.",\n    "5.": "Place the stuffed peppers in a baking dish and cover with foil. Bake for 30 minutes, then remove the foil and bake for an additional 10 minutes.",\n    "6.": "Serve hot, garnished with fresh herbs if desired."}',
    'Allergens: None',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Stuffed+Peppers.jpg',
    'VEGAN',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Pasta Primavera',
    '{\n    "1.": "Cook pasta according to package instructions until al dente. Drain and set aside. Slice the bell pepper and onion. Halve the cherry tomatoes.",\n    "2.": "In a large pan, heat olive oil over medium heat. Add garlic and sauté until fragrant, about 1 minute.",\n    "3.": "Add the bell peppers and onions, and cook until softened, about 5-7 minutes.",\n    "4.": "Add the cherry tomatoes and spinach, and cook until the tomatoes soften and the spinach wilts, about 3-4 minutes.",\n    "5.": "Add the cooked pasta to the pan and toss to coat with the vegetable mixture. Season with salt and pepper.",\n    "6.": "Serve hot, garnished with fresh herbs if desired."}',
    'Allergens: Gluten (from pasta; use gluten-free pasta if needed)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Pasta+Primavera.jpg',
    'VEGAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Spinach and Chickpea Curry',
    '{\n    "1.": "Dice the onion and mince the garlic. Drain and rinse the chickpeas.",\n    "2.": "Heat olive oil in a large pan over medium heat. Add onions and garlic, sauté until onions are translucent.",\n    "3.": "Stir in the curry powder and cook for 1 minute to release the flavors.",\n    "4.": "Add the diced tomatoes and chickpeas, stirring well. Simmer for 10 minutes.",\n    "5.": "Stir in the spinach and coconut milk. Cook until the spinach is wilted, about 3-4 minutes. Season with salt.",\n    "6.": "Serve hot with cooked rice or naan."}',
    'Allergens: None',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Spinach+and+Chickpea+Curry.jpg',
    'VEGAN',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Grilled Vegetable Wrap',
    '{\n    "Preparation (10 minutes)": "Preheat a grill or grill pan over medium heat. Slice the bell pepper, onion, and tomato.",\n    "Cooking (15 minutes)": "Toss the bell pepper and onion with olive oil, salt, and pepper. Grill the bell pepper and onion for about 5-7 minutes until tender and slightly charred. Warm the tortilla on the grill for 1-2 minutes until soft.",\n    "Assembly (5 minutes)": "Spread hummus on the tortilla if using. Layer with grilled bell pepper, onion, spinach, and tomato slices. Roll the tortilla tightly into a wrap.",\n    "Serving": "Serve warm or at room temperature."}',
    'Allergens: Gluten (from tortilla; use gluten-free tortilla if needed)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Grilled+Vegetable+Wrap.jpg',
    'VEGAN',
    'GRILLING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Vegan Tomato Basil Soup',
    '{\n    "Preparation (10 minutes)": "Chop the tomatoes, dice the onion, and mince the garlic. Chop the basil.",\n    "Cooking (20 minutes)": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until onions are translucent. Add chopped tomatoes and cook until they begin to break down, about 5 minutes. Add vegetable broth and bring to a simmer. Cook for 10 minutes. Stir in the fresh basil and season with salt and pepper.",\n    "Blending (5 minutes)": "Use an immersion blender to blend the soup until smooth, or carefully transfer to a blender.",\n    "Serving": "Serve hot, optionally garnished with additional basil leaves."}',
    'Allergens: None',
    '10 minutes',
    '25 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/vegetarian++and+vegan+images/vegetarian++and+vegan+images/Vegan+Tomato+Basil+Soup.jpg',
    'VEGAN',
    'COOKING'
);

## Paleo recipes
-- Recipe 1: Grilled Chicken with Spinach Salad
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Grilled Chicken with Spinach Salad',
    '{\n    "1.": "Preheat the grill to medium-high heat. Mince the garlic and zest the lemon.",\n    "2.": "Season the chicken breasts with salt, pepper, half of the garlic, and lemon zest.",\n    "3.": "Grill the chicken breasts for 6-7 minutes on each side, until fully cooked (internal temperature should reach 165°F/75°C).",\n    "4.": "While the chicken is grilling, heat 1 tbsp olive oil in a pan over medium heat. Add the remaining garlic and sauté for 1 minute.",\n    "5.": "Add the spinach to the pan and cook until wilted, about 2-3 minutes. Remove from heat and drizzle with lemon juice.",\n    "6.": "Slice the grilled chicken and serve on top of the sautéed spinach. Drizzle with the remaining olive oil."}',
    'Allergens: None',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/_Paleo+recipes+images/.+Paleo+recipes+images/Grilled+Chicken+with+Spinach+Salad.jpg',
    'PALEO',
    'GRILLING'
);

-- Recipe 2: Paleo Beef Stir-Fry
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Paleo Beef Stir-Fry',
    '{\n    "1.": "Thinly slice the beef, bell peppers, and onion. Mince the garlic.",\n    "2.": "Heat coconut oil in a large pan or wok over medium-high heat. Add the beef slices and cook until browned, about 3-4 minutes. Remove and set aside.",\n    "3.": "In the same pan, add the garlic, bell peppers, and onion. Sauté until the vegetables are tender, about 5-7 minutes.",\n    "4.": "Return the beef to the pan, stir to combine, and cook for an additional 2 minutes. Season with salt and pepper."}',
    'Allergens: None',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/_Paleo+recipes+images/.+Paleo+recipes+images/Paleo+Beef+Stir-Fry.jpg',
    'PALEO',
    'STIR-FRY'
);

-- Recipe 3: Paleo Cauliflower Rice Bowl
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Paleo Cauliflower Rice Bowl',
    '{\n    "1.": "Grate or rice the cauliflower. Dice the chicken and onion. Mince the garlic.",\n    "2.": "Heat 1 tbsp olive oil in a large pan over medium heat. Add the chicken and cook until browned, about 5-7 minutes. Remove and set aside.",\n    "3.": "In the same pan, add the remaining olive oil, onion, and garlic. Sauté until onions are translucent, about 3-4 minutes.",\n    "4.": "Add the cauliflower rice and spinach, cooking until the spinach wilts and the cauliflower is tender, about 5 minutes.",\n    "5.": "Return the chicken to the pan, stir to combine, and cook for an additional 2 minutes. Season with salt and pepper."}',
    'Allergens: None',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/_Paleo+recipes+images/.+Paleo+recipes+images/Paleo+Cauliflower+Rice+Bowl.jpg',
    'PALEO',
    'COOKING'
);

-- Recipe 4: Paleo Stuffed Bell Peppers
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Paleo Stuffed Bell Peppers',
    '{\n    "1.": "Preheat the oven to 375°F (190°C). Dice the onion and tomatoes. Mince the garlic.",\n    "2.": "Heat olive oil in a pan over medium heat. Add onions and garlic, sauté until onions are translucent.",\n    "3.": "Add the ground turkey and cook until browned, about 5-7 minutes.",\n    "4.": "Stir in the diced tomatoes and cook for another 2-3 minutes. Season with salt and pepper.",\n    "5.": "Stuff each bell pepper with the turkey mixture.",\n    "6.": "Place the stuffed peppers in a baking dish and cover with foil. Bake for 30 minutes, then remove the foil and bake for an additional 10 minutes."}',
    'Allergens: None',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/_Paleo+recipes+images/.+Paleo+recipes+images/Paleo+Stuffed+Bell+Peppers.jpg',
    'PALEO',
    'BAKING'
);

-- Recipe 5: Paleo Chicken Soup
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Paleo Chicken Soup',
    '{\n    "1.": "Dice the chicken, onion, and carrots. Mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add the onions and garlic, sauté until onions are translucent.",\n    "3.": "Add the diced chicken and cook until browned, about 5 minutes.",\n    "4.": "Stir in the carrots and chicken broth. Bring to a boil, then reduce heat and simmer for 20 minutes.",\n    "5.": "Add the spinach and cook until wilted, about 2-3 minutes. Season with salt and pepper."}',
    'Allergens: None',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/_Paleo+recipes+images/.+Paleo+recipes+images/Paleo+Chicken+Soup.jpg',
    'PALEO',
    'COOKING'
);


## Low fat recipes
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Vegetable Stir-Fry',
    '{\n    "1.": "Slice the bell peppers and onion. Mince the garlic.",\n    "2.": "Heat sesame oil (if using) in a large pan over medium-high heat.",\n    "3.": "Add garlic and cook for 1 minute.",\n    "4.": "Add bell peppers and onion, stir-fry until tender, about 5-7 minutes.",\n    "5.": "Add spinach and soy sauce, cook until spinach is wilted, about 2-3 minutes.",\n    "6.": "Serve hot, optionally over brown rice or quinoa."}',
    'Allergens: Soy (from soy sauce)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Vegetable+Stir-Fry.jpg',
    'LOW_FAT',
    'STIR-FRY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Grilled Chicken Salad',
    '{\n    "1.": "Preheat the grill to medium-high heat.",\n    "2.": "Season the chicken breasts with salt and pepper.",\n    "3.": "Grill chicken for 6-7 minutes on each side until fully cooked.",\n    "4.": "Toss spinach, cherry tomatoes, and bell peppers in a bowl.",\n    "5.": "Slice the grilled chicken and place on top of the salad.",\n    "6.": "Drizzle with olive oil and balsamic vinegar, if using."}',
    'Allergens: None',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Grilled+Chicken+Salad.jpg',
    'LOW_FAT',
    'SALAD'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Minestrone Soup',
    '{\n    "1.": "Chop the tomatoes, dice the onion, and mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until translucent.",\n    "3.": "Add tomatoes and cook for 5 minutes.",\n    "4.": "Stir in vegetable broth and beans. Bring to a boil, reduce heat, and simmer for 15 minutes.",\n    "5.": "Add spinach and cook until wilted, about 2-3 minutes.",\n    "6.": "Season with salt and pepper and serve hot."}',
    'Allergens: None',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Minestrone+Soup.jpg',
    'LOW_FAT',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Stuffed Peppers',
    '{\n    "1.": "Preheat the oven to 375°F (190°C).",\n    "2.": "Cook the quinoa as per package instructions.",\n    "3.": "Dice the onion and tomatoes. Mince the garlic.",\n    "4.": "Heat olive oil in a pan. Sauté onions and garlic until translucent.",\n    "5.": "Add tomatoes and quinoa, stir to combine. Season with salt and pepper.",\n    "6.": "Stuff each bell pepper with the quinoa mixture.",\n    "7.": "Place stuffed peppers in a baking dish, cover with foil, and bake for 30 minutes.",\n    "8.": "Remove foil and bake for an additional 10-15 minutes."}',
    'Allergens: None',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Stuffed+Peppers.jpg',
    'LOW_FAT',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Baked Fish with Vegetables',
    '{\n    "1.": "Preheat the oven to 375°F (190°C).",\n    "2.": "Slice the bell pepper and onion.",\n    "3.": "Place fish fillets on a baking sheet lined with parchment paper.",\n    "4.": "Drizzle fish with olive oil and season with salt and pepper.",\n    "5.": "Arrange bell peppers and onions around the fish.",\n    "6.": "Bake for 15-20 minutes, until fish is flaky and cooked through.",\n    "7.": "Add spinach to the baking sheet for the last 5 minutes of baking to wilt.",\n    "8.": "Serve hot with lemon wedges."}',
    'Allergens: Fish (from white fish)',
    '10 minutes',
    '25 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Baked+Fish+with+Vegetables.jpg',
    'LOW_FAT',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Spinach and Chickpea Curry',
    '{\n    "1.": "Dice the onion and mince the garlic.",\n    "2.": "Heat olive oil in a pan over medium heat. Sauté onions and garlic until translucent.",\n    "3.": "Add curry powder and cook for 1 minute.",\n    "4.": "Add diced tomatoes and chickpeas, simmer for 10 minutes.",\n    "5.": "Add spinach and cook until wilted, about 3-4 minutes.",\n    "6.": "Season with salt and serve hot."}',
    'Allergens: None',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Spinach+and+Chickpea+Curry.jpg',
    'LOW_FAT',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Grilled Vegetable Wrap',
    '{\n    "1.": "Preheat the grill to medium-high heat.",\n    "2.": "Slice the bell pepper, onion, and tomato.",\n    "3.": "Toss bell peppers and onion with olive oil, salt, and pepper.",\n    "4.": "Grill vegetables for 5-7 minutes until tender.",\n    "5.": "Warm the tortilla on the grill for 1-2 minutes.",\n    "6.": "Place grilled vegetables, spinach, and tomato slices on the tortilla.",\n    "7.": "Roll up the tortilla tightly into a wrap."}',
    'Allergens: Gluten (from tortilla; use gluten-free tortilla if needed)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Grilled+Vegetable+Wrap.jpg',
    'LOW_FAT',
    'GRILLING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Tomato Basil Soup',
    '{\n    "1.": "Chop the tomatoes, dice the onion, and mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until translucent.",\n    "3.": "Add tomatoes and cook for 5 minutes.",\n    "4.": "Stir in vegetable broth, bring to a simmer, and cook for 15 minutes.",\n    "5.": "Add basil, season with salt and pepper, and blend the soup until smooth.",\n    "6.": "Serve hot, optionally garnished with additional basil."}',
    'Allergens: None',
    '10 minutes',
    '25 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Tomato+Basil+Soup.jpg',
    'LOW_FAT',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Chicken and Vegetable Skewers',
    '{\n    "1.": "Preheat the grill to medium-high heat.",\n    "2.": "Cut the chicken, bell peppers, onion, and tomato into chunks.",\n    "3.": "Thread the chicken and vegetables onto skewers.",\n    "4.": "Brush the skewers with olive oil and season with salt and pepper.",\n    "5.": "Grill skewers for 10-12 minutes, turning occasionally, until chicken is fully cooked.",\n    "6.": "Serve hot, optionally with a side salad."}',
    'Allergens: None',
    '15 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Chicken+and+Vegetable+Skewers.jpg',
    'LOW_FAT',
    'GRILLING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Fat Lentil Soup',
    '{\n    "1.": "Chop the tomatoes, dice the onion, and mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Sauté onions and garlic until translucent.",\n    "3.": "Add tomatoes, lentils, and vegetable broth. Bring to a boil, reduce heat, and simmer for 25 minutes.",\n    "4.": "Add spinach and cook until wilted, about 2-3 minutes.",\n    "5.": "Season with salt and pepper and serve hot."}',
    'Allergens: None',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Low+fat+recipes/Low+fat+recipes/Low-Fat+Lentil+Soup.jpg',
    'LOW_FAT',
    'COOKING'
);

## LOW CARB RECIPES
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Carb Chicken Salad',
    '{\n    "1.": "Dice celery and red onion. Shred cooked chicken breast.",\n    "2.": "In a large bowl, combine chicken, celery, red onion, mayonnaise, and Dijon mustard. Mix well.",\n    "3.": "Season with salt and pepper to taste.",\n    "4.": "Serve chilled, optionally over a bed of greens."}',
    'Allergens: Mayonnaise (contains eggs), mustard (may contain mustard seeds)',
    '10 minutes',
    '5 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/low+carb+recipes/low+carb+recipes/Low-Carb+Chicken+Salad.jpg',
    'LOW_CARB',
    'SALAD'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Carb Zucchini Noodles with Pesto',
    '{\n    "1.": "Spiralize zucchinis into noodles.",\n    "2.": "Heat olive oil in a pan over medium heat. Add zucchini noodles and cook for 3-5 minutes, until tender.",\n    "3.": "Stir in pesto sauce and cook for an additional 2 minutes.",\n    "4.": "Optionally, sprinkle with Parmesan cheese and serve hot."}',
    'Allergens: Parmesan cheese (contains dairy)',
    '5 minutes',
    '10 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/low+carb+recipes/low+carb+recipes/Low-Carb+Zucchini+Noodles+with+Pesto.jpg',
    'LOW_CARB',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Carb Beef Stir-Fry',
    '{\n    "1.": "Slice beef and vegetables. Mince garlic.",\n    "2.": "Heat olive oil in a large pan over medium-high heat. Add garlic and cook for 1 minute.",\n    "3.": "Add beef and cook until browned.",\n    "4.": "Add bell peppers and broccoli, stir-fry for 7-10 minutes.",\n    "5.": "Stir in soy sauce and cook for an additional 2 minutes.",\n    "6.": "Serve hot, optionally with a side of cauliflower rice."}',
    'Allergens: Soy sauce (contains soy)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/low+carb+recipes/low+carb+recipes/Low-Carb+Beef+Stir-Fry.jpg',
    'LOW_CARB',
    'STIR-FRY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Carb Eggplant Lasagna',
    '{\n    "1.": "Preheat oven to 375°F (190°C). Slice eggplant and brush with olive oil.",\n    "2.": "Bake eggplant slices for 20 minutes, flipping halfway through.",\n    "3.": "Mix ricotta cheese, egg, dried basil, salt, and pepper in a bowl.",\n    "4.": "In a baking dish, layer eggplant slices, marinara sauce, ricotta mixture, and mozzarella cheese. Repeat layers and top with Parmesan cheese.",\n    "5.": "Bake for 25-30 minutes until cheese is bubbly and golden.",\n    "6.": "Let cool for 10 minutes before slicing and serving."}',
    'Allergens: Ricotta and mozzarella cheese (contains dairy)',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/low+carb+recipes/low+carb+recipes/Low-Carb+Eggplant+Lasagna.jpg',
    'LOW_CARB',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Low-Carb Chicken and Spinach Stuffed Mushrooms',
    '{\n    "1.": "Preheat oven to 375°F (190°C). Remove stems from mushrooms.",\n    "2.": "In a bowl, mix shredded chicken, spinach, cream cheese, and mozzarella cheese.",\n    "3.": "Stuff each mushroom cap with the mixture.",\n    "4.": "Place stuffed mushrooms on a baking sheet and bake for 15 minutes until the mushrooms are tender and filling is bubbly.",\n    "5.": "Serve warm as an appetizer or main dish."}',
    'Allergens: Cream cheese and mozzarella cheese (contains dairy)',
    '10 minutes',
    '15 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/low+carb+recipes/low+carb+recipes/Low-Carb+Chicken+and+Spinach+Stuffed+Mushrooms.jpg',
    'LOW_CARB',
    'MIXOLOGY'
);

### KOSHER RECIPES
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Kosher Chicken Soup',
    '{\n    "1.": "Chop the onions and carrots. Slice the celery and mince the garlic.",\n    "2.": "Heat olive oil in a large pot over medium heat. Add onions and garlic, sauté until translucent.",\n    "3.": "Add chicken parts, carrots, celery, and water. Bring to a boil.",\n    "4.": "Reduce heat, cover, and simmer for 1.5 hours.",\n    "5.": "Remove chicken from the pot, shred the meat from the bones, and return it to the pot.",\n    "6.": "Season with salt and pepper. Garnish with parsley or dill if desired.",\n    "7.": "Serve hot, optionally with a side of matzo or challah."}',
    'Allergens: None',
    '10 minutes',
    '90 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Kosher++Recipes/Kosher++Recipes/Kosher+Chicken+Soup.jpg',
    'KOSHER',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Kosher Stuffed Bell Peppers',
    '{\n    "1.": "Preheat oven to 375°F (190°C).",\n    "2.": "Cook quinoa according to package instructions. Dice the onion and tomatoes. Mince the garlic.",\n    "3.": "Heat olive oil in a pan over medium heat. Add onions and garlic, sauté until translucent.",\n    "4.": "Stir in diced tomatoes, paprika, salt, and pepper. Cook for 5 minutes.",\n    "5.": "Combine the tomato mixture with cooked quinoa.",\n    "6.": "Stuff each bell pepper with the quinoa mixture and place in a baking dish.",\n    "7.": "Bake for 30-35 minutes, until peppers are tender.",\n    "8.": "Serve hot, optionally with a side salad."}',
    'Allergens: None',
    '15 minutes',
    '45 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Kosher++Recipes/Kosher++Recipes/.+Kosher+Stuffed+Bell+Peppers.jpg',
    'KOSHER',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Kosher Salmon with Lemon and Dill',
    '{\n    "1.": "Preheat oven to 400°F (200°C).",\n    "2.": "Place salmon fillets on a baking sheet. Drizzle with olive oil, season with salt and pepper.",\n    "3.": "Place lemon slices on top of each fillet and sprinkle with fresh dill.",\n    "4.": "Bake for 15-20 minutes, until salmon is cooked through and flakes easily with a fork.",\n    "5.": "Serve hot with lemon wedges and a side of roasted vegetables."}',
    'Allergens: Fish (from salmon)',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Kosher++Recipes/Kosher++Recipes/Kosher+Salmon+with+Lemon+and+Dill.jpg',
    'KOSHER',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Kosher Roasted Vegetables',
    '{\n    "1.": "Preheat oven to 425°F (220°C).",\n    "2.": "Chop carrots, bell pepper, and zucchini.",\n    "3.": "Toss vegetables with olive oil, rosemary, salt, and pepper.",\n    "4.": "Spread on a baking sheet and roast for 25-30 minutes, until tender.",\n    "5.": "Serve hot as a side dish or over a bed of quinoa."}',
    'Allergens: None',
    '10 minutes',
    '25 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Kosher++Recipes/Kosher++Recipes/Kosher+Roasted+Vegetables.jpg',
    'KOSHER',
    'MIXOLOGY'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Kosher Baked Sweet Potatoes',
    '{\n    "1.": "Preheat oven to 400°F (200°C).",\n    "2.": "Wash and pierce sweet potatoes with a fork.",\n    "3.": "Rub sweet potatoes with olive oil, paprika, salt, and pepper.",\n    "4.": "Place on a baking sheet and bake for 40-45 minutes, until tender.",\n    "5.": "Serve hot, optionally with a dollop of Greek yogurt or a sprinkle of fresh herbs."}',
    'Allergens: None',
    '10 minutes',
    '40 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Kosher++Recipes/Kosher++Recipes/Kosher+Baked+Sweet+Potatoes.jpg',
    'KOSHER',
    'BAKING'
);


### GLUTEN RECIPES
INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Gluten-Free Beef Tacos',
    '{\n    "1.": "Cook ground beef in a skillet over medium heat until browned. Drain excess fat.",\n    "2.": "Add taco seasoning to beef and mix according to package instructions.",\n    "3.": "Fill taco shells with seasoned beef. Top with lettuce, tomatoes, cheese, and sour cream if desired.",\n    "4.": "Serve immediately."}',
    'Allergens: Cheese and sour cream (contains dairy, optional)',
    '5 minutes',
    '10 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Gluten-free+recipes/Gluten-free+recipes/Gluten-Free+Beef+Tacos.jpg',
    'GLUTEN_FREE',
    'COOKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Gluten-Free Baked Chicken Thighs',
    '{\n    "1.": "Preheat oven to 400°F (200°C). Rub chicken thighs with olive oil and season with paprika, garlic powder, onion powder, salt, and pepper.",\n    "2.": "Place chicken thighs on a baking sheet and bake for 25-30 minutes until cooked through and crispy.",\n    "3.": "Serve hot."}',
    'Allergens: Olive oil',
    '10 minutes',
    '30 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Gluten-free+recipes/Gluten-free+recipes/Gluten-Free+Baked+Chicken+Thighs.jpg',
    'GLUTEN_FREE',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Gluten-Free Sweet Potato and Black Bean Salad',
    '{\n    "1.": "Preheat oven to 400°F (200°C). Toss sweet potato cubes with olive oil, salt, and pepper. Roast for 25-30 minutes until tender.",\n    "2.": "In a bowl, combine roasted sweet potatoes, black beans, corn, and red onion. Drizzle with lime juice and mix well.",\n    "3.": "Serve warm or chilled."}',
    'Allergens: Olive oil',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Gluten-free+recipes/Gluten-free+recipes/Gluten-Free+Sweet+Potato+and+Black+Bean+Salad.jpg',
    'GLUTEN_FREE',
    'SALAD'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Gluten-Free Apple Cinnamon Muffins',
    '{\n    "1.": "Preheat oven to 350°F (175°C). Grease a muffin tin.",\n    "2.": "In a bowl, mix flour, sugar, baking powder, and cinnamon. In another bowl, combine applesauce, milk, and egg. Add wet ingredients to dry ingredients and mix until just combined. Fold in diced apples.",\n    "3.": "Divide batter among muffin cups and bake for 18-20 minutes or until a toothpick inserted comes out clean.",\n    "4.": "Let cool for 10 minutes before serving."}',
    'Allergens: Milk (contains dairy, optional)',
    '10 minutes',
    '20 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Gluten-free+recipes/Gluten-free+recipes/Gluten-Free+Apple+Cinnamon+Muffins.jpg',
    'GLUTEN_FREE',
    'BAKING'
);

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, image, category_diet, category_style)
VALUES (
    1,
    'Gluten-Free Veggie and Hummus Wrap',
    '{\n    "1.": "Spread hummus over the gluten-free tortilla.",\n    "2.": "Layer mixed greens, shredded carrots, cucumber, and bell pepper over the hummus.",\n    "3.": "Roll up the tortilla tightly. Cut in half and serve."}',
    'Allergens: Hummus (contains chickpeas, check for other ingredients)',
    '5 minutes',
    '5 minutes',
    'https://capstonemealplanner.s3.ap-southeast-2.amazonaws.com/Gluten-free+recipes/Gluten-free+recipes/Gluten-Free+Veggie+and+Hummus+Wrap.jpg',
    'GLUTEN_FREE',
    'MIXOLOGY'
);
