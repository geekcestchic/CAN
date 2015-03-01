# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150301153543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "brands_projects", id: false, force: :cascade do |t|
    t.integer "brand_id",   null: false
    t.integer "project_id", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories_projects", id: false, force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "project_id",  null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "project_id"
    t.string   "title"
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "content"
    t.string   "video"
    t.string   "image"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "parent_project_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer  "project_id"
    t.integer  "comment_id"
    t.integer  "user_id"
    t.integer  "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
