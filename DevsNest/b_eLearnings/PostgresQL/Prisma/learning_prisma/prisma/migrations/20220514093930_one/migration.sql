-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "gst_number" VARCHAR(16) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" INTEGER NOT NULL,
    "decription" VARCHAR(255) NOT NULL,
    "images" TEXT[],
    "in_stock" BOOLEAN NOT NULL DEFAULT false,
    "is_discounted" BOOLEAN NOT NULL DEFAULT false,
    "discount_price" INTEGER NOT NULL DEFAULT 0,
    "seller_id" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seller_name_key" ON "Seller"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_gst_number_key" ON "Seller"("gst_number");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
