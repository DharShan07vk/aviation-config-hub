-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" TEXT,
    "avatar_url" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aircraft" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "msn" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "country" TEXT,
    "manufacture_date" TIMESTAMP(3),
    "delivery_date" TIMESTAMP(3),
    "flight_hours" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "flight_cycles" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "engines_count" INTEGER NOT NULL DEFAULT 2,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aircraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AircraftComponent" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "manufacturer" TEXT,
    "model" TEXT,
    "serial_number" TEXT,
    "part_number" TEXT,
    "status" TEXT,
    "manufacture_date" TIMESTAMP(3),
    "last_shop_visit_date" TIMESTAMP(3),
    "hours_since_new" DOUBLE PRECISION,
    "cycles_since_new" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AircraftComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "part_number" TEXT NOT NULL,
    "cmm_number" TEXT,
    "classification" TEXT,
    "classification_date" TIMESTAMP(3),
    "class_linkage" TEXT,
    "compatible_aircraft_models" TEXT[],
    "estimated_price" DOUBLE PRECISION,
    "quotation_price" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "aircraft_model" TEXT NOT NULL,
    "task_name" TEXT NOT NULL,
    "mpd_amm_task_ids" TEXT,
    "task_card_ref" TEXT,
    "description" TEXT,
    "assigned_component_id" TEXT,
    "zones" TEXT[],
    "estimated_manhours" DOUBLE PRECISION,
    "estimated_price" DOUBLE PRECISION,
    "quotation_price" DOUBLE PRECISION,
    "interval_threshold" DOUBLE PRECISION,
    "repeat_interval" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Aircraft" ADD CONSTRAINT "Aircraft_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AircraftComponent" ADD CONSTRAINT "AircraftComponent_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "Aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
