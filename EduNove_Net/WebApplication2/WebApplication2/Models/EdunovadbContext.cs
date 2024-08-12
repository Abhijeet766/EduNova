using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace WebApplication2.Models;

public partial class EdunovadbContext : DbContext
{
    public EdunovadbContext()
    {
    }

    public EdunovadbContext(DbContextOptions<EdunovadbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<ExamQuestion> ExamQuestions { get; set; }

    public virtual DbSet<Examination> Examinations { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Pdf> Pdfs { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<Result> Results { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<StudentEnrollment> StudentEnrollments { get; set; }

    public virtual DbSet<StudentExam> StudentExams { get; set; }

    public virtual DbSet<StudentResult> StudentResults { get; set; }

    public virtual DbSet<Subject> Subjects { get; set; }

    public virtual DbSet<SubjectTrainer> SubjectTrainers { get; set; }

    public virtual DbSet<Topic> Topics { get; set; }

    public virtual DbSet<Trainer> Trainers { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Video> Videos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=edunovadb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId).HasName("PRIMARY");

            entity.ToTable("admin");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.RoleId, "role_id_idx");

            entity.Property(e => e.AdminId).HasColumnName("admin_id");
            entity.Property(e => e.AdminName)
                .HasMaxLength(255)
                .HasColumnName("admin_name");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.RoleId).HasColumnName("role_id");

            entity.HasOne(d => d.Role).WithMany(p => p.Admins)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("role_id");
        });

        modelBuilder.Entity<ExamQuestion>(entity =>
        {
            entity.HasKey(e => e.ExamQuestionId).HasName("PRIMARY");

            entity.ToTable("exam_question");

            entity.HasIndex(e => e.ExamId, "exam_id");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.Property(e => e.ExamQuestionId).HasColumnName("exam_question_id");
            entity.Property(e => e.ExamId).HasColumnName("exam_id");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");

            entity.HasOne(d => d.Exam).WithMany(p => p.ExamQuestions)
                .HasForeignKey(d => d.ExamId)
                .HasConstraintName("exam_question_ibfk_1");

            entity.HasOne(d => d.Question).WithMany(p => p.ExamQuestions)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("exam_question_ibfk_2");
        });

        modelBuilder.Entity<Examination>(entity =>
        {
            entity.HasKey(e => e.ExamId).HasName("PRIMARY");

            entity.ToTable("examination");

            entity.HasIndex(e => e.SubjectId, "subject_id");

            entity.Property(e => e.ExamId).HasColumnName("exam_id");
            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.SubjectName)
                .HasMaxLength(255)
                .HasColumnName("subject_name");

            entity.HasOne(d => d.Subject).WithMany(p => p.Examinations)
                .HasForeignKey(d => d.SubjectId)
                .HasConstraintName("examination_ibfk_1");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.TransactionId, "transaction_id").IsUnique();

            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.Date)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .HasColumnName("payment_type");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasColumnName("status");
            entity.Property(e => e.TransactionDate).HasColumnName("transaction_date");
            entity.Property(e => e.TransactionId).HasColumnName("transaction_id");
        });

        modelBuilder.Entity<Pdf>(entity =>
        {
            entity.HasKey(e => e.PdfId).HasName("PRIMARY");

            entity.ToTable("pdfs");

            entity.HasIndex(e => e.SubjectId, "subject_id");

            entity.HasIndex(e => e.TopicId, "topic_id");

            entity.Property(e => e.PdfId).HasColumnName("pdf_id");
            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.TopicId).HasColumnName("topic_id");

            entity.HasOne(d => d.Subject).WithMany(p => p.Pdfs)
                .HasForeignKey(d => d.SubjectId)
                .HasConstraintName("pdfs_ibfk_1");

            entity.HasOne(d => d.Topic).WithMany(p => p.Pdfs)
                .HasForeignKey(d => d.TopicId)
                .HasConstraintName("pdfs_ibfk_2");
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("PRIMARY");

            entity.ToTable("question");

            entity.Property(e => e.QuestionId).HasColumnName("question_id");
            entity.Property(e => e.OptionA)
                .HasMaxLength(255)
                .HasColumnName("option_a");
            entity.Property(e => e.OptionB)
                .HasMaxLength(255)
                .HasColumnName("option_b");
            entity.Property(e => e.OptionC)
                .HasMaxLength(255)
                .HasColumnName("option_c");
            entity.Property(e => e.OptionD)
                .HasMaxLength(255)
                .HasColumnName("option_d");
            entity.Property(e => e.QuestionDescription)
                .HasColumnType("text")
                .HasColumnName("question_description");
        });

        modelBuilder.Entity<Result>(entity =>
        {
            entity.HasKey(e => e.ResultId).HasName("PRIMARY");

            entity.ToTable("result");

            entity.HasIndex(e => e.ExamId, "exam_id");

            entity.Property(e => e.ResultId).HasColumnName("result_id");
            entity.Property(e => e.ExamId).HasColumnName("exam_id");
            entity.Property(e => e.IsCorrect).HasColumnName("is_correct");
            entity.Property(e => e.TotalMarks)
                .HasPrecision(5, 2)
                .HasColumnName("total_marks");

            entity.HasOne(d => d.Exam).WithMany(p => p.Results)
                .HasForeignKey(d => d.ExamId)
                .HasConstraintName("result_ibfk_1");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("role");

            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(255)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.StudentId).HasName("PRIMARY");

            entity.ToTable("student");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.UId, "u_id");

            entity.Property(e => e.StudentId).HasColumnName("student_id");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Enable).HasDefaultValueSql("'1'");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .HasColumnName("last_name");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(20)
                .HasColumnName("phone_no");
            entity.Property(e => e.Qualification)
                .HasColumnType("text")
                .HasColumnName("qualification");
            entity.Property(e => e.UId).HasColumnName("u_id");

            entity.HasOne(d => d.UIdNavigation).WithMany(p => p.Students)
                .HasForeignKey(d => d.UId)
                .HasConstraintName("student_ibfk_1");
        });

        modelBuilder.Entity<StudentEnrollment>(entity =>
        {
            entity.HasKey(e => e.EnrollId).HasName("PRIMARY");

            entity.ToTable("student_enrollment");

            entity.HasIndex(e => e.TrainerSubjectId, "trainer_subject_id");

            entity.Property(e => e.EnrollId).HasColumnName("enroll_id");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.EnrollmentDate).HasColumnName("enrollment_date");
            entity.Property(e => e.Fees)
                .HasPrecision(10, 2)
                .HasColumnName("fees");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.TrainerSubjectId).HasColumnName("trainer_subject_id");

            entity.HasOne(d => d.TrainerSubject).WithMany(p => p.StudentEnrollments)
                .HasForeignKey(d => d.TrainerSubjectId)
                .HasConstraintName("student_enrollment_ibfk_1");
        });

        modelBuilder.Entity<StudentExam>(entity =>
        {
            entity.HasKey(e => e.StudentExamId).HasName("PRIMARY");

            entity.ToTable("student_exam");

            entity.HasIndex(e => e.ExamId, "exam_id");

            entity.HasIndex(e => e.StudentId, "student_id");

            entity.Property(e => e.StudentExamId).HasColumnName("student_exam_id");
            entity.Property(e => e.ExamId).HasColumnName("exam_id");
            entity.Property(e => e.StudentId).HasColumnName("student_id");

            entity.HasOne(d => d.Exam).WithMany(p => p.StudentExams)
                .HasForeignKey(d => d.ExamId)
                .HasConstraintName("student_exam_ibfk_2");

            entity.HasOne(d => d.Student).WithMany(p => p.StudentExams)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("student_exam_ibfk_1");
        });

        modelBuilder.Entity<StudentResult>(entity =>
        {
            entity.HasKey(e => e.StudentResultId).HasName("PRIMARY");

            entity.ToTable("student_result");

            entity.HasIndex(e => e.ExamId, "exam_id");

            entity.HasIndex(e => e.QuestionId, "question_id");

            entity.HasIndex(e => e.StudentId, "student_id");

            entity.Property(e => e.StudentResultId).HasColumnName("student_result_id");
            entity.Property(e => e.Answer)
                .HasMaxLength(255)
                .HasColumnName("answer");
            entity.Property(e => e.ExamId).HasColumnName("exam_id");
            entity.Property(e => e.Marks)
                .HasPrecision(5, 2)
                .HasColumnName("marks");
            entity.Property(e => e.QuestionId).HasColumnName("question_id");
            entity.Property(e => e.StudentId).HasColumnName("student_id");

            entity.HasOne(d => d.Exam).WithMany(p => p.StudentResults)
                .HasForeignKey(d => d.ExamId)
                .HasConstraintName("student_result_ibfk_3");

            entity.HasOne(d => d.Question).WithMany(p => p.StudentResults)
                .HasForeignKey(d => d.QuestionId)
                .HasConstraintName("student_result_ibfk_2");

            entity.HasOne(d => d.Student).WithMany(p => p.StudentResults)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("student_result_ibfk_1");
        });

        modelBuilder.Entity<Subject>(entity =>
        {
            entity.HasKey(e => e.SubjectId).HasName("PRIMARY");

            entity.ToTable("subject");

            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.SubjectName)
                .HasMaxLength(255)
                .HasColumnName("subject_name");
        });

        modelBuilder.Entity<SubjectTrainer>(entity =>
        {
            entity.HasKey(e => e.TrainerSubjectId).HasName("PRIMARY");

            entity.ToTable("subject_trainer");

            entity.HasIndex(e => e.SubjectId, "subject_id");

            entity.HasIndex(e => e.TrainerId, "trainer_id");

            entity.Property(e => e.TrainerSubjectId).HasColumnName("trainer_subject_id");
            entity.Property(e => e.Duration)
                .HasMaxLength(50)
                .HasColumnName("duration");
            entity.Property(e => e.Fees)
                .HasPrecision(10, 2)
                .HasColumnName("fees");
            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.TrainerId).HasColumnName("trainer_id");

            entity.HasOne(d => d.Subject).WithMany(p => p.SubjectTrainers)
                .HasForeignKey(d => d.SubjectId)
                .HasConstraintName("subject_trainer_ibfk_2");

            entity.HasOne(d => d.Trainer).WithMany(p => p.SubjectTrainers)
                .HasForeignKey(d => d.TrainerId)
                .HasConstraintName("subject_trainer_ibfk_1");
        });

        modelBuilder.Entity<Topic>(entity =>
        {
            entity.HasKey(e => e.TopicId).HasName("PRIMARY");

            entity.ToTable("topic");

            entity.HasIndex(e => e.PaymentId, "payment_id");

            entity.HasIndex(e => e.SubjectId, "subject_id");

            entity.Property(e => e.TopicId).HasColumnName("topic_id");
            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.TopicName)
                .HasMaxLength(255)
                .HasColumnName("topic_name");

            entity.HasOne(d => d.Payment).WithMany(p => p.Topics)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("topic_ibfk_2");

            entity.HasOne(d => d.Subject).WithMany(p => p.Topics)
                .HasForeignKey(d => d.SubjectId)
                .HasConstraintName("topic_ibfk_1");
        });

        modelBuilder.Entity<Trainer>(entity =>
        {
            entity.HasKey(e => e.TrainerId).HasName("PRIMARY");

            entity.ToTable("trainer");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.UId, "u_id_idx");

            entity.Property(e => e.TrainerId).HasColumnName("trainer_id");
            entity.Property(e => e.Address)
                .HasColumnType("text")
                .HasColumnName("address");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .HasColumnName("last_name");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(20)
                .HasColumnName("phoneNo");
            entity.Property(e => e.Qualification)
                .HasMaxLength(255)
                .HasColumnName("qualification");
            entity.Property(e => e.Specialization)
                .HasMaxLength(255)
                .HasColumnName("specialization");
            entity.Property(e => e.UId).HasColumnName("u_id");

            entity.HasOne(d => d.UIdNavigation).WithMany(p => p.Trainers)
                .HasForeignKey(d => d.UId)
                .HasConstraintName("u_id");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UId).HasName("PRIMARY");

            entity.ToTable("user");

            entity.HasIndex(e => e.RoleId, "role_id");

            entity.Property(e => e.UId).HasColumnName("u_id");
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("user_ibfk_1");
        });

        modelBuilder.Entity<Video>(entity =>
        {
            entity.HasKey(e => e.VideoId).HasName("PRIMARY");

            entity.ToTable("videos");

            entity.HasIndex(e => e.SubjectId, "subject_id");

            entity.HasIndex(e => e.TopicId, "topic_id");

            entity.Property(e => e.VideoId).HasColumnName("video_id");
            entity.Property(e => e.SubjectId).HasColumnName("subject_id");
            entity.Property(e => e.TopicId).HasColumnName("topic_id");

            entity.HasOne(d => d.Subject).WithMany(p => p.Videos)
                .HasForeignKey(d => d.SubjectId)
                .HasConstraintName("videos_ibfk_1");

            entity.HasOne(d => d.Topic).WithMany(p => p.Videos)
                .HasForeignKey(d => d.TopicId)
                .HasConstraintName("videos_ibfk_2");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
