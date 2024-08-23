INSERT INTO users (email, first_name, last_name, password)
VALUES ('admin@meal-planner.com', 'Admin', 'ADMIN', 'admin-password');

INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, category_diet, category_style)
VALUES (
    1,
    'Vegetable Stir-Fry with Tofu',
    '{\n    \"1.\": \"Press tofu to remove excess water and cube it. \",\n    \"2.\": \"Slice the bell peppers and onion. Mince the garlic. \",\n    \"3.\": \"Heat olive oil in a large pan or wok over medium heat. \",\n    \"4.\": \"Add tofu cubes and cook until golden on all sides, about 5 minutes. Remove and set aside. \",\n    \"5.\": \"In the same pan, add garlic and onions, sauté until onions are translucent. \",\n    \"6.\": \"Add bell peppers and cook for 3-4 minutes until they start to soften. \",\n    \"7.\": \"Return the tofu to the pan. Add soy sauce and water, stirring well. Mix cornstarch with a little water and add to the pan to thicken the sauce if desired. \",\n    \"8.\": \"Stir in sesame oil for extra flavor. Cook for another 2 minutes. \",\n    \"9.\": \"Serve hot over cooked rice or noodles. \"\n}',
    'Allergens: Soy (from tofu and soy sauce), gluten (if using regular soy sauce; use gluten-free soy sauce if needed)',
    '10 minutes',
    '15 minutes', 
    'VEGETARIAN',
    'COOKING'
);