-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserLikedPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    CONSTRAINT "UserLikedPost_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserLikedPost_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserLikedPost" ("id", "post_id", "user_id") SELECT "id", "post_id", "user_id" FROM "UserLikedPost";
DROP TABLE "UserLikedPost";
ALTER TABLE "new_UserLikedPost" RENAME TO "UserLikedPost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
