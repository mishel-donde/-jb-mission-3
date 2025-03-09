import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
} from "sequelize-typescript";
import DevelopmentTeams from "./Teams";

@Table
export default class Meetings extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => DevelopmentTeams)
  @AllowNull(false)
  @Column(DataType.UUID)
  groupId: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  startDatetime: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  endDatetime: Date;

  @Column(DataType.TEXT)
  meetingDescription: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  meetingRoom: string;

  @BelongsTo(() => DevelopmentTeams)
  group: DevelopmentTeams;
}
